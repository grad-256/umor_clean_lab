import { gql } from '@apollo/client'

const post = {
  getItem: function (id: number) {
    return gql`
    query {
      postBy(postId: ${id}){
        title
        date
        link
        content
      }
    }
   `
  },
  getItems: function () {
    return gql`
      query {
        posts {
          edges {
            node {
              id
              title
              excerpt
              date
              postId
              slug
              featuredImage {
                node {
                  uri
                  slug
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `
  },
}
export default post
