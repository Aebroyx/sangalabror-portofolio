'use client'

import { useEffect, useRef } from 'react'

/**
 * GlyphField
 *
 * Full-viewport canvas background: a grid of dim monospace code glyphs that
 * gently flicker, and glowing circular ripples that expand from every click.
 *
 * Rendering is incremental: only cells whose intensity or glyph changed are
 * redrawn each frame, so idle cost is tiny and ripple cost scales with the
 * size of the wavefront rather than the whole screen.
 */

const GLYPHS = '{}[]()<>/\\|=+-*&^%$#@!?;:~.0123456789abcdefABCDEF'

// Grid
const CELL = 18 // px per cell (CSS px)
const FONT_SIZE = 11 // px

// Idle look
const BASE_INTENSITY = 0.1 // idle glyph brightness, 0..1
const FLICKER_RATE = 0.0025 // fraction of cells that flicker per frame
const FLICKER_PULSE = 0.24 // brightness pulse added on flicker
const PULSE_DECAY = 0.9 // per-frame multiplier on the pulse
const EASE = 0.3 // how fast drawn intensity approaches target

// Ripple
const RIPPLE_SPEED = 460 // px per second
const RIPPLE_SIGMA = 30 // px, thickness of the glowing band
const RIPPLE_LIFE = 2.4 // seconds
const RIPPLE_DECAY = 1.3 // exponential amplitude decay per second
const RIPPLE_SCRAMBLE = 0.35 // chance a cell at the wavefront swaps glyph
const MAX_RIPPLES = 8

// Colors (idle gray -> accent purple)
const IDLE_RGB = [120, 120, 134] as const
const ACCENT_RGB = [206, 202, 251] as const // #cecafb
const GLOW_RGB = [138, 115, 249] as const // tailwind `primary` #8A73F9
const GLOW_ALPHA = 0.22 // peak alpha of the soft ring glow on the overlay layer

// Clicks anywhere (including buttons and navigation) spawn a ripple, except on
// text inputs and anything explicitly opted out.
const IGNORE_SELECTOR = 'input, textarea, select, [data-no-ripple]'

interface Ripple {
  x: number
  y: number
  born: number
}

export default function GlyphField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const glowCanvas = glowRef.current
    if (!canvas || !glowCanvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    const gctx = glowCanvas.getContext('2d', { alpha: true })
    if (!ctx || !gctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let cols = 0
    let rows = 0
    let width = 0
    let height = 0
    let glyph = new Uint8Array(0)
    let current = new Float32Array(0) // intensity currently drawn
    let pulse = new Float32Array(0) // transient flicker brightness
    let vignette = new Float32Array(0) // static per-cell multiplier for idle brightness
    let dirty = new Uint8Array(0)

    const ripples: Ripple[] = []
    let raf = 0
    let last = performance.now()
    let running = true

    const font = `${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`

    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      for (const [el, c] of [
        [canvas, ctx],
        [glowCanvas, gctx],
      ] as const) {
        el.width = Math.floor(width * dpr)
        el.height = Math.floor(height * dpr)
        el.style.width = `${width}px`
        el.style.height = `${height}px`
        c.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
      ctx.font = font
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      cols = Math.ceil(width / CELL) + 1
      rows = Math.ceil(height / CELL) + 1
      const size = cols * rows

      glyph = new Uint8Array(size)
      current = new Float32Array(size)
      pulse = new Float32Array(size)
      vignette = new Float32Array(size)
      dirty = new Uint8Array(size).fill(1)

      const cx = width / 2
      const cy = height / 2
      const maxD = Math.hypot(cx, cy)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c
          glyph[i] = (Math.random() * GLYPHS.length) | 0
          // Dimmer toward the center where content sits, brighter at the edges.
          const d = Math.hypot(c * CELL - cx, r * CELL - cy) / maxD
          const t = Math.min(1, Math.max(0, d))
          vignette[i] = 0.45 + 0.55 * (t * t * (3 - 2 * t))
        }
      }
      ctx.clearRect(0, 0, width, height)
    }

    const drawCell = (i: number, intensity: number) => {
      const c = i % cols
      const r = (i - c) / cols
      const x = c * CELL
      const y = r * CELL
      ctx.clearRect(x, y, CELL, CELL)

      const t = Math.min(1, intensity)
      const alpha = 0.05 + t * 0.9
      const rr = IDLE_RGB[0] + (ACCENT_RGB[0] - IDLE_RGB[0]) * t
      const gg = IDLE_RGB[1] + (ACCENT_RGB[1] - IDLE_RGB[1]) * t
      const bb = IDLE_RGB[2] + (ACCENT_RGB[2] - IDLE_RGB[2]) * t
      ctx.fillStyle = `rgba(${rr | 0}, ${gg | 0}, ${bb | 0}, ${alpha.toFixed(3)})`
      ctx.fillText(GLYPHS[glyph[i]], x + CELL / 2, y + CELL / 2 + 0.5)
    }

    // Soft ring glow for each ripple, drawn on a separate layer that is fully
    // cleared every frame (so nothing accumulates between frames).
    const drawGlow = (now: number) => {
      gctx.clearRect(0, 0, width, height)
      for (const rp of ripples) {
        const age = (now - rp.born) / 1000
        const radius = age * RIPPLE_SPEED
        const amp = Math.exp(-age * RIPPLE_DECAY)
        const band = RIPPLE_SIGMA * 3
        const inner = Math.max(0, radius - band)
        const outer = radius + band
        const grad = gctx.createRadialGradient(rp.x, rp.y, inner, rp.x, rp.y, outer)
        const [r, g, b] = GLOW_RGB
        const peak = (GLOW_ALPHA * amp).toFixed(3)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`)
        grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${peak})`)
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        gctx.fillStyle = grad
        gctx.beginPath()
        gctx.arc(rp.x, rp.y, outer, 0, Math.PI * 2)
        gctx.fill()
      }
    }

    const frame = (now: number) => {
      if (!running) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      const size = cols * rows

      // Ambient flicker: a handful of random cells swap glyph and pulse.
      if (!reduceMotion) {
        const n = Math.max(1, Math.round(size * FLICKER_RATE))
        for (let k = 0; k < n; k++) {
          const i = (Math.random() * size) | 0
          glyph[i] = (Math.random() * GLYPHS.length) | 0
          pulse[i] = Math.max(pulse[i], FLICKER_PULSE)
          dirty[i] = 1
        }
      }

      // Ripple contribution accumulated into a sparse per-frame buffer.
      const rippleBuf = ripples.length ? new Float32Array(size) : null
      if (rippleBuf) {
        for (let k = ripples.length - 1; k >= 0; k--) {
          const rp = ripples[k]
          const age = (now - rp.born) / 1000
          if (age > RIPPLE_LIFE) {
            ripples.splice(k, 1)
            continue
          }
          const radius = age * RIPPLE_SPEED
          const amp = Math.exp(-age * RIPPLE_DECAY)
          const band = RIPPLE_SIGMA * 3
          const c0 = Math.max(0, Math.floor((rp.x - radius - band) / CELL))
          const c1 = Math.min(cols - 1, Math.ceil((rp.x + radius + band) / CELL))
          const r0 = Math.max(0, Math.floor((rp.y - radius - band) / CELL))
          const r1 = Math.min(rows - 1, Math.ceil((rp.y + radius + band) / CELL))
          const inv2s2 = 1 / (2 * RIPPLE_SIGMA * RIPPLE_SIGMA)

          for (let r = r0; r <= r1; r++) {
            const dy = r * CELL + CELL / 2 - rp.y
            for (let c = c0; c <= c1; c++) {
              const dx = c * CELL + CELL / 2 - rp.x
              const d = Math.hypot(dx, dy) - radius
              if (d > band || d < -band) continue
              const g = Math.exp(-d * d * inv2s2) * amp
              if (g < 0.01) continue
              const i = r * cols + c
              rippleBuf[i] += g
              dirty[i] = 1
              if (g > 0.5 && Math.random() < RIPPLE_SCRAMBLE * dt * 10) {
                glyph[i] = (Math.random() * GLYPHS.length) | 0
              }
            }
          }
        }
      }

      drawGlow(now)

      // Resolve targets and redraw dirty cells.
      for (let i = 0; i < size; i++) {
        let p = pulse[i]
        if (p > 0.002) {
          p *= PULSE_DECAY
          pulse[i] = p
          dirty[i] = 1
        } else if (p !== 0) {
          pulse[i] = 0
          dirty[i] = 1
        }

        const target = (BASE_INTENSITY + p) * vignette[i] + (rippleBuf ? rippleBuf[i] : 0)
        const cur = current[i]
        const diff = target - cur

        if (dirty[i] || Math.abs(diff) > 0.004) {
          const next = Math.abs(diff) < 0.004 ? target : cur + diff * EASE
          current[i] = next
          drawCell(i, next)
          dirty[i] = Math.abs(target - next) > 0.004 ? 1 : 0
        }
      }

      raf = requestAnimationFrame(frame)
    }

    const spawnRipple = (x: number, y: number) => {
      if (ripples.length >= MAX_RIPPLES) ripples.shift()
      ripples.push({ x, y, born: performance.now() })
    }

    const onPointerDown = (e: PointerEvent) => {
      if (reduceMotion) return
      if (e.button !== 0 && e.pointerType === 'mouse') return
      const target = e.target as Element | null
      if (target && target.closest(IGNORE_SELECTOR)) return
      spawnRipple(e.clientX, e.clientY)
    }

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(setupCanvas, 120)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }

    setupCanvas()
    raf = requestAnimationFrame(frame)

    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none"
        style={{ zIndex: -1 }}
      />
      <canvas
        ref={glowRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none select-none"
        style={{ zIndex: -1 }}
      />
    </>
  )
}
