import React from 'react'

function About() {
  return (
    <div className='container mx-auto px-10 mb-8 font-semibold text-black dark:text-white'>
        <h1 className='text-2xl font-bold'>Hello! My name is Abdullah.</h1>
        <p className='text-xl py-8'>
         I am a Web Developer specializing in building modern web applications. I created this portfolio / blog to combine
         my programming and writing hobbies into one space. I got interested in web development in 2018 and have been actively learning about it since.   
        </p>
        <h1 className='text-2xl font-bold my-2'>Latest tech stack :</h1>
        <ul className='grid grid-cols-3 col-span-1 max-w-[400px] gap-2 py-2'>
          <li>React</li>
          <li>NextJS</li>
          <li>Headless CMS</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>Wordpress</li>
        </ul>
         <p className='text-xl py-8'>
         This blog / portfolio is built with <a className='font-bold underline' target="_blank" href='https://nextjs.org/'>NextJS</a> and uses <a className='font-bold underline' target="_blank" href='https://strapi.io/'>Strapi</a> as a backend 
           headless CMS, and <a className='font-bold underline' target="_blank" href='https://graphql.org/'>GraphQL</a> as the
            data querying language.

         </p>
    </div>
  )
}

export default About