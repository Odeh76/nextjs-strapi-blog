import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='block relative overflow-hidden shadow-md pb-80 mb-6'>
      <h1 className='transition duration-100 text-left mb-6 px-4 mt-4 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
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