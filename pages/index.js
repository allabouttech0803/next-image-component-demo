import Nav from '../components/nav'
import Image from 'next/image';
export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className='flex flex-wrap  mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1'>

        <div className='my-2 px-2 lg:w-4/12  md:w-full sm:full' ></div>
        <div className='lpx-2 lg:w-4/12  md:w-full sm:full'>
          <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            Next.js + Tailwind CSS 2.0
        </h1>
          <br />
          <Image src='/banner.jpg' layout='responsive' width={2560} height={1400} className='rounded-lg' />
          <p>
            This is some paragraph for blog
          </p>
        </div>
        <div className='px-2 lg:w-4/12  md:w-full sm:w-full my-48 sm:full'></div>
      </div>
    </div >
  )
}
