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
        blocks {
      ... on CoreParagraphBlock {
        originalContent
        attributesJSON
        dynamicContent
        attributes {
          ... on CoreParagraphBlockAttributes {
            content
          }
        }
      }
      name
      order
      ... on CoreTableBlock {
        attributesJSON
        dynamicContent
        name
        order
        attributes {
          ... on CoreTableBlockAttributes {
            align
            anchor
            head {
              cells {
                align
                content
                scope
              }
            }
            foot {
              cells {
                align
                scope
              }
            }
            body {
              cells {
                align
                content
                scope
              }
            }
          }
        }
      }
    }
    isPreview
    preview {
      node {
        id
        status
        skillItemId
      }
    }
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
        blocks {
      ... on CoreParagraphBlock {
        originalContent
        attributesJSON
        dynamicContent
        attributes {
          ... on CoreParagraphBlockAttributes {
            content
          }
        }
      }
      name
      order
      ... on CoreTableBlock {
        attributesJSON
        dynamicContent
        name
        order
        attributes {
          ... on CoreTableBlockAttributes {
            align
            anchor
            head {
              cells {
                align
                content
                scope
              }
            }
            foot {
              cells {
                align
                scope
              }
            }
            body {
              cells {
                align
                content
                scope
              }
            }
          }
        }
      }
    }
    isPreview
    preview {
      node {
        id
        status
        newsItemId
      }
    }
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
        blocks {
      ... on CoreParagraphBlock {
        originalContent
        attributesJSON
        dynamicContent
        attributes {
          ... on CoreParagraphBlockAttributes {
            content
          }
        }
      }
      name
      order
      ... on CoreTableBlock {
        attributesJSON
        dynamicContent
        name
        order
        attributes {
          ... on CoreTableBlockAttributes {
            align
            anchor
            head {
              cells {
                align
                content
                scope
              }
            }
            foot {
              cells {
                align
                scope
              }
            }
            body {
              cells {
                align
                content
                scope
              }
            }
          }
        }
      }
    }
    isPreview
    preview {
      node {
        id
        status
        newsItemId
      }
    }
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
