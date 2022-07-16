import Image from 'next/image'
import React from 'react'
import { getPostDetails, getPosts } from '../../services'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'


const PostDetails = ({post}) => {
  const router = useRouter();

  if(router.isFallback) {
    return <Loader />
  }

  return (
    <>
    {post.map((post) => (
      <>
      <div className='container w-10/12 max-w-[960px] mx-auto rounded bg-black text-white dark:bg-white dark:text-black px-10 mb-8 shadow-lg pb-12'>
        <div className='mx-auto block relative overflow-hidden shadow-md pb-80 mb-6'>
            <h1 className='pb-8 py-4 px-4 text-3xl font-semibold'>{post.attributes.Name}</h1>
            <h1 className='pb-8 transition duration-100 text-left mb-6 px-4 mt-4 text-3xl font-semibold'>{post.attributes.Title}</h1>
            <h1 className='pb-8 px-4'>{post.attributes.Excerpt}</h1>
            <p className='pb-8 px-4'>{post.attributes.Content}</p>
            <Image
            width={760}
            height={760}
            quality={95}
            src={`${post.attributes.FeaturedImage.data.attributes.url}`}
            alt={post.attributes.Title}
            className="w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
        </div>
      </div>
      </>
    ))}
    </>
  )
}





export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPostDetails();
  const paths = posts.map(({ slug }) => ({ params: { slug: `${slug}` } }))
  return {
    paths: paths,
    fallback: true,
  };
}

export default PostDetails