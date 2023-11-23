import { Plus_Jakarta_Sans } from 'next/font/google'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={jakartaSans.className}>
        <div className='flex'>
          <div className='w-1/6'>

          </div>
          <div className='flex-1 w-4/6'>
            <p>Hi, my name is</p>
            <h1 className='text-4xl font-bold'>
              Sangalabror Pujianto
            </h1>
            <h2>

            </h2>
          </div>
          <div className='w-1/6'>

          </div>
        </div>
      </main>
  )
}
