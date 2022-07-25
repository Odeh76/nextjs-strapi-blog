import React from 'react'
import Image from 'next/image'
import { getAboutPage } from '../services';



function About({ aboutPage }) {
  return (
    <div className='container mx-auto px-10 mb-8 font-semibold text-black dark:text-white text-xl'>
        {aboutPage?.map((content) => (
          <>
          <div className='md:flex gap-x-8 justify-center'>
            <div className='max-w-[400px] mb-8' key={content.Name}>
            <h1>Hi! My name is Abdullah</h1>
            {content.attributes.Content}
            </div>
            <Image
            layout='intrinsic'
            width={460}
            height={360}
            quality={95}
            src={`${content.attributes.FeaturedImage.data.attributes.url}`}
            className="object-cover shadow-lg rounded-t-lg rounded-lg"
            />
          </div>
            </>
           ))}
      </div>
           )
         }
           {/* <h1>This blog / portfolio is built with:</h1>
            <a target="_blank" href='https://nextjs.org/'>NextJS</a>
            <a target="_blank" href='https://tailwindcss.com/'>TailwindCSS</a>
            <a target="_blank" href='https://strapi.io/'>Strapi</a>
            <a target="_blank" href='https://graphql.org/'>GraphQL</a>  */}




export async function getStaticProps() {
  const aboutPage = (await getAboutPage()) || [];
  
  return {
    props: { aboutPage }
  }
}

export default About
