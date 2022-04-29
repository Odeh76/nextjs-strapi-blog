import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query getPosts {
      posts{
        data{
          attributes{
            Title
            Slug
            Excerpt
            Content
            FeaturedImage{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
    `

    const result = await request(graphqlAPI, query);
    return result.posts.data
}

export const getCategories = async () => {
  const query = gql`
  query GetCategories{
    categories{
      data{
        attributes{
          Name
          Slug
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query)
  return result.categories.data
}

export const getNavLinks = async () => {
  const query = gql`
  query GetNavLinks{
    navLinks{
      data{
        attributes{
          Name
          Slug
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);
  return result.navLinks.data
}