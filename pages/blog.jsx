import React from 'react'
import { PostCard } from '../components'
import { getPosts } from '../services'

function Blog({posts}) {
  return (
        <div className='container w-10/12 max-w-[960px] mx-auto'>
          <h1 className='text-xl md:text-2xl mb-8 font-semibold'>Things I've written about... </h1>
          <div className='block relative overflow-hidden shadow-md pb-80 mb-6 bg-black text-white dark:bg-white dark:text-black rounded'>
            {posts?.map((post, index) => (
              <>
                <PostCard post={post.attributes} key={post.Title} />
              </>
            ))}
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
