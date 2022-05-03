import React from 'react'
import { PostCard } from '../components'
import { getPosts } from '../services'

function Blog({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
            {posts?.map((post, index) => (
                <>
                <PostCard post={post.attributes} key={post.Title} />
                </>
            ))}
        </div>
  <div className='lg:col-span-4 col-span-1'>
  </div>
  </div>
      </div>
  )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
  
    return {
      props: { posts }
    }
  }

export default Blog