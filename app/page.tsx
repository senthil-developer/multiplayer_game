import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      hello
      <div>
        <Link href={'/play'} className='p-2 border rounded-md'>
          Play
        </Link>
      </div>
    </div>
  )
}

