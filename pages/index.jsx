import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'
import Blog from './blog'




const Home = ({ posts }) => {


  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Abdullah Odeh | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className='text-white text-4xl py-4 font-semibold '>Hello, my name is</h3>
      <h1 className='text-white text-6xl lg:text-8xl py-8 font-bold'>Abdullah Odeh</h1>
      <h3 className='text-white text-4xl py-4 font-semibold'>I enjoy building modern web applications, and writing about my interests.</h3>
      <button className='my-8 py-8 px-8 hover:text-green-600 hover:italic transition ease-in-out rounded-full text-5xl text-white cursor-pointer font-semibold border-solid border-white border-2 border-white-600'>Connect</button>
    </div>
  )
}


export default Home
