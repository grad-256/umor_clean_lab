import React from 'react'

const PostDiary = ({ post }) => {
  console.log({ post })

  return (
    <>
      <p>{post.data.diaryItemBy.title}</p>
      <p>{post.data.diaryItemBy.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: post.data.diaryItemBy.content }}
      />
    </>
  )
}

export default PostDiary
