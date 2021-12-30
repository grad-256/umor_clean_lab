import React from 'react'

const PostSkill = ({ post }) => {
  console.log({ post })

  return (
    <>
      <p>{post.data.skillItemBy.title}</p>
      <p>{post.data.skillItemBy.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: post.data.skillItemBy.content }}
      />
    </>
  )
}

export default PostSkill
