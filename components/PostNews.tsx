import React from 'react'

const PostNews = ({ post }) => {
  console.log({ post })

  return (
    <>
      <p>{post.data.newsItemBy.title}</p>
      <p>{post.data.newsItemBy.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.data.newsItemBy.content }} />
    </>
  )
}

export default PostNews
