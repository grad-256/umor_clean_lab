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
  skillItem: function (id: number) {
    return gql`
    query {
      skillItemBy(skillItemId: ${id}){
        title
        date
        link
        content
      }
    }
   `
  },
  skillItems: function () {
    return gql`
      query {
        skillItems {
          edges {
            node {
              id
              title
              date
              content
              skillItemId
            }
          }
        }
      }
    `
  },
  newsItem: function (id: number) {
    return gql`
    query {
      newsItemBy(newsItemId: ${id}){
        title
        date
        link
        content
      }
    }
   `
  },
  newsItems: function () {
    return gql`
      query {
        newsItems {
          edges {
            node {
              id
              title
              date
              content
              newsItemId
            }
          }
        }
      }
    `
  },
  diaryItem: function (id: number) {
    return gql`
    query {
      diaryItemBy(diaryItemId: ${id}){
        title
        date
        link
        content
      }
    }
   `
  },
  diaryItems: function () {
    return gql`
      query {
        diaryItems {
          edges {
            node {
              id
              title
              date
              content
              diaryItemId
            }
          }
        }
      }
    `
  },
}
export default post
