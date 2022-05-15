import Image from 'next/image'
import React from 'react'
import { getPostDetails } from '../../services'


const PostDetails = ({post}) => {


  return (
    <>
    {post.map((post) => (
      <>
      <div className='bg-black text-white dark:text-black dark:bg-white container lg:max-w-[960px] mx-auto sm:w-[85%] px-10 mb-8 shadow-lg rounded-lg p-0 lg:p-8 pb-12'>
        <div className='mx-auto block relative overflow-hidden shadow-md pb-80 mb-6'>
            <h1 className='pb-8 py-4 px-4 text-3xl font-semibold'>Author: {post.attributes.author.data.attributes.Name}</h1>
            <h1 className='pb-8 transition duration-100 text-left mb-6 px-4 mt-4 text-3xl font-semibold'>Title: {post.attributes.Title}</h1>
            <h1 className='pb-8 px-4'>Excerpt: {post.attributes.Excerpt}</h1>
            <p className='pb-8 px-4'>Content: {post.attributes.Content}</p>
            <Image
            width={760}
            height={760}
            quality={95}
            src={`http://localhost:1337${post.attributes.FeaturedImage.data.attributes.url}`}
            alt={post.attributes.Title}
            className="w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
        </div>
      </div>
      </>
    ))}
    </>
  )
}



export async function getStaticPaths() {
  const posts = await getPostDetails();
  const paths = posts.map((post) => {
    return {
      params: {Slug: post.attributes.Slug.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.Slug);
  return {
    props: {
      post: data,
    },
  };
}




export default PostDetails