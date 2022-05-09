import React from 'react'
import { PostCard } from '../components'
import { getPosts } from '../services'

function Blog({posts}) {
  return (
        <div className='container text-black dark:text-white w-10/12 max-w-[960px] mx-auto'>
          <h1 className='text-4xl mb-8 font-semibold'>Things I've written about... </h1>
            {posts?.map((post, index) => (
              <>
                <PostCard post={post.attributes} key={post.Title} />
              </>
            ))}
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