import React from 'react'
import Image from 'next/image'
import profilepic from '../public/profile.png'
import { getAboutPage } from '../services';



function About({ aboutPage }) {
  return (
    <div className='container mx-auto px-10 mb-8 font-semibold text-black dark:text-white md:flex gap-8 justify-center items-center'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold'>My name is Abdullah.</h1>
        {/* <p className='text-xl py-8'>
         I am a Web Developer specializing in building modern web applications. I created this portfolio / blog to combine
         my programming and writing hobbies. I got interested in web development in 2018 and have been actively learning about it since.
         I've been fascinated with technology since a young age, and am constantly amazed at the impact it can have on the world.
         Learning to build things on the web has become a deep passion of mine, and I continually strive to contribute to the process of building
         useful products.  
        </p> */}
        <>
        {aboutPage.map((content, index) => (
                <div>
                  hello
                </div>
            ))}
        </>
         
        <p>

          This blog / portfolio is built with:
        </p>
         <div className='grid grid-cols-2 text-lg py-2 gap-2'>
            <a target="_blank" href='https://nextjs.org/'>NextJS</a>
            <a target="_blank" href='https://tailwindcss.com/'>TailwindCSS</a>
            <a target="_blank" href='https://strapi.io/'>Strapi</a>
            <a target="_blank" href='https://graphql.org/'>GraphQL</a> 
         </div>
         </div>
         {/* <Image
            quality={95}
            src={profilepic}
            className="w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            /> */}
    </div>
  )
}


export async function getStaticProps() {
  const aboutPage = (await getAboutPage()) || [];

  return {
    props: { aboutPage }
  }
}

export default About