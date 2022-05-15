import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PostCard = ({ post }) => {

  console.log(process.env.NEXT_PUBLIC_STRAPI_ENDPOINT)
  console.log(process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_PRODUCTION)

  return (
    <div className='container w-10/12 max-w-[960px] mx-auto rounded'>
      <div className='block relative overflow-hidden'>
      <h1 className='transition duration-100 text-left mb-6 px-4 mt-4 cursor-pointer hover:text-green-600 text-3xl font-semibold'>
        <Link href={`/post/${post.Slug}`}>
          {post.Title}
        </Link>
      </h1>
      <p className='pb-8 px-4'>{post.Content}</p>
       <Image
          width={760}
          height={760}
          layout="responsive"
          quality={95}
          src={`http://localhost:1337${post.FeaturedImage.data.attributes.url}`}
          alt={post.Title}
          className="w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
      </div>
    </div>
  )
}

export default PostCard