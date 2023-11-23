import { Plus_Jakarta_Sans } from 'next/font/google'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

// Components
import Timeline from './components/Timeline'

export default function Home() {
  return (
      <main className={jakartaSans.className}>
        <div className='flex'>
          <div className='w-1/6'>
          </div>
          <div className='flex-1 w-4/6'>
            <section id='about'>
              <div className='flex justify-center items-center pt-16'>
                <img className='rounded-full h-[500px] w-[500px]' src='/portrait.png' alt="portrait" />
              </div>
              <p className='text-violet-500'>Hi, my name is</p>
              <h1 className='text-7xl font-bold text-slate-300 pt-4'>
                Sangalabror Pujianto
              </h1>
              <h2 className='text-5xl font-bold text-slate-400 pt-4'>
                Fullstack Developer
              </h2>
              <br/>
              <h3 className='text-slate-400'>
                A motivated individual who aspires to be a Software Developer that specializes in full stack software
                development. I consider myself to be versatile and can adapt and overcome different challenges. Efficiently skilled
                in problem solving. Has worked around technologies at an early age which lead to my pursuit of my Computer
                Science degree.
              </h3>
            </section>

            <br />
            <br />
            <br />
            
            <section id='education'>
              <Timeline />
            </section>

            <section id='experience'>

            </section>
          </div>
          <div className='w-1/6'>
          </div>
        </div>
      </main>
  )
}
