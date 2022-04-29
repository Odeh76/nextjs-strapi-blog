import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
      <h1 className='transition duration-100 text-left mb-6 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.Slug}`}>
          {post.Title}
        </Link>
      </h1>
      <p className='pb-8'>{post.Content}</p>
       <Image
          width={840}
          quality={95}
          height={840}
          src={`http://localhost:1337${post.FeaturedImage.data.attributes.url}`}
          alt={post.Title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  )
}

export default PostCard