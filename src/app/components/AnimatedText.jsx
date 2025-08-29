import { forwardRef } from 'react'

const AnimatedText = forwardRef(({ 
    children, 
    className = "", 
    animationType = "fadeIn",
    delay = 0,
    duration = 0.8,
    ...props 
}, ref) => {
    
    const getAnimationClasses = () => {
        switch (animationType) {
            case "fadeIn":
                return "opacity-0 animate-fade-in"
            case "slideUp":
                return "opacity-0 translate-y-8 animate-slide-up"
            case "slideLeft":
                return "opacity-0 -translate-x-8 animate-slide-left"
            case "scaleIn":
                return "opacity-0 scale-95 animate-scale-in"
            default:
                return "opacity-0 animate-fade-in"
        }
    }

    return (
        <div 
            ref={ref}
            className={`${getAnimationClasses()} ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            }}
            {...props}
        >
            {children}
        </div>
    )
})

AnimatedText.displayName = 'AnimatedText'

export default AnimatedText
