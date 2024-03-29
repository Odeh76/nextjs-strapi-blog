import Head from 'next/head'
import { onClickMailToHandler } from '../services'

console.log('hello')

const Home = () => {
  

  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-10 mb-8">
      <Head>
        <title>Abdullah Odeh | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container lg:flex flex-col justify-center items-center text-black dark:text-white'>
        <h3 className='mb-12 text-xl font-semibold'>Hello, my name is</h3>
        <h1 className='mb-12 text-4xl md:text-6xl font-bold animate-pulse'>Abdullah Odeh</h1>
        <h3 className='lg:text-center mb-12 text-xl font-semibold'>I enjoy building modern web applications, and writing about my interests.</h3>
        <button onClick={onClickMailToHandler} className='py-6 px-6 hover:bg-black hover:text-white hover:italic transition ease-in-out rounded-full text-xl text-black dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-white border-2 border-white-600 cursor-pointer font-semibold border-solid border-black'>Connect</button>
      </div>
    </div>
  )
}


export default Home
