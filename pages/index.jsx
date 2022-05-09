import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'
import Blog from './blog'
import Footer from '../components/Footer'



const Home = ({ posts }) => {


  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-10 mb-8">
      <Head>
        <title>Abdullah Odeh | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container lg:flex flex-col justify-center items-center'>
        <h3 className='text-black dark:text-white mb-12 text-3xl font-semibold'>Hello, my name is</h3>
        <h1 className='text-black dark:text-white mb-12 text-6xl md:text-8xl font-bold animate-pulse'>Abdullah Odeh</h1>
        <h3 className='text-black dark:text-white lg:text-center mb-12 text-3xl font-semibold'>I enjoy building modern web applications, and writing about my interests.</h3>
        <button className='py-8 px-8 hover:italic transition ease-in-out rounded-full text-4xl text-black dark:border-white border-2 border-white-600 dark:text-white cursor-pointer font-semibold border-solid border-black'>Connect</button>
      </div>
    </div>
  )
}


export default Home
