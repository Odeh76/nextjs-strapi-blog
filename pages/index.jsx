import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'




const Home = ({ posts }) => {


  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Abdullah Odeh | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
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

export default Home
