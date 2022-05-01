import React from 'react'
import { PostDetail } from '../../components'
import { getPosts, getPostDetails } from '../../services'


const PostDetails = ({post}) => {


  return (
    <>
    {post.map((post) => (
      <>
      <h1>{post.attributes.Title}</h1>
      <h1>{post.attributes.Content}</h1>
      </>
    ))}
    </>
  )
}



export async function getStaticPaths() {
  const posts = await getPostDetails();
  const paths = posts.map((post) => {
    return {
      params: {Slug: post.attributes.Slug.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.Slug);
  return {
    props: {
      post: data,
    },
  };
}




export default PostDetails