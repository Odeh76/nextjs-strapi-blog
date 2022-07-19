import React from 'react'
import Image from 'next/image'
import profilepic from '../public/profile.jpg'
function About() {
  return (
    <div className='container mx-auto px-10 mb-8 font-semibold text-black dark:text-white md:flex gap-8 justify-center items-center'>
      <div className='flex flex-col max-w-[360px]'>
        <h1 className='text-2xl font-bold'>My name is Abdullah.</h1>
        <p className='text-xl py-8'>
         I am a Web Developer specializing in building modern web applications. I created this portfolio / blog to combine
         my programming and writing hobbies into one space. I got interested in web development in 2018 and have been actively learning about it since.   
        </p>
         This blog / portfolio is built with:
         <div className='grid grid-cols-2 text-lg py-2 gap-2'>
            <a target="_blank" href='https://nextjs.org/'>NextJS</a>
            <a target="_blank" href='https://tailwindcss.com/'>TailwindCSS</a>
            <a target="_blank" href='https://strapi.io/'>Strapi</a>
            <a target="_blank" href='https://graphql.org/'>GraphQL</a> 
         </div>
         </div>
         <Image
            width={360}
            height={360}
            quality={95}
            src={profilepic}
            className="w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
    </div>
  )
}

export default About