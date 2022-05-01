import React from 'react'
import { getPosts, getPostDetails } from '../services'

const PostDetail = ({post}) => {


  return (
    <h1></h1>
  )
}


export async function getStaticPaths() {
  const posts = await getPosts();
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

export default PostDetail