import React from 'react'
import Link from 'next/link'


function Projects() {
  return (
    <div className='container mx-auto px-10 mb-8 text-black dark:text-white'>
      <h1 className='text-4xl mb-8 font-semibold'>Here are some things I've worked on. </h1>
      <div className='grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 mx-auto justify-items-center max-w-[800px]'>
        <h1 className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-slate-50 hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>
          <Link href='/'>InZa Lab</Link>
        </h1>
        <h1 className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-slate-50 hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>
          <Link href='/'>InZa Lab</Link>
        </h1>
        <h1 className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-slate-50 hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>
          <Link href='/'>InZa Lab</Link>
        </h1>
        <h1 className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-slate-50 hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>
          <Link href='/'>InZa Lab</Link>
        </h1>
      </div>
    </div>
  )
}

export default Projects