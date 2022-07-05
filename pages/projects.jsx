import React from 'react'
import Link from 'next/link'


function Projects() {
  return (
    <div className='container mx-auto px-10 mb-8 text-black dark:text-white'>
      <h1 className='text-4xl mb-8 font-semibold'>Here are some things I've worked on. </h1>
      <div className='grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 mx-auto justify-items-center max-w-[800px]'>
        <a target="_blank" href='https://github.com/Odeh76/my-inzalab' className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>InZa Lab</a>
        <a target="_blank" href='https://github.com/Odeh76/nextjs-strapi-blog' className='text-3xl font-semibold transition ease-in-out delay-50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-solid border-black dark:border-white border h-96 flex justify-center items-center rounded text-center w-full max-w-[400px]'>Next Blog</a>
      </div>
    </div>
  )
}

export default Projects