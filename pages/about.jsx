import React from 'react'

function About() {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <h1 className='text-white text-4xl font-bold'>Hello! My name is Abdullah.</h1>
        <p className='text-white text-2xl py-8 '>
         I am a Web Developer specializing in building modern web applications. I created this portfolio to combine
         my programming and writing hobbies into one space. 
        </p>
         <p className='text-white text-2xl'>
         This blog / portfolio is built with
          <a className='font-bold underline' target="_blank" href='https://nextjs.org/'>NextJS</a> and uses 
           <a className='font-bold underline' target="_blank" href='https://strapi.io/'>Strapi</a> as a backend 
           headless CMS, and  
            <a className='font-bold underline' target="_blank" href='https://graphql.org/'>GraphQL</a> as the
            querying language.  
         </p>
    </div>
  )
}

export default About