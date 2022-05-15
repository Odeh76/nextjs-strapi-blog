import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT

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

export const getPostDetails = async (Slug) => {
  const query = gql`
  query GetPostDetails($Slug: String) {
    posts(filters: {Slug:{eq:$Slug}}){
      data{
        attributes{
          Title
          Slug
          Excerpt
          Content
          FeaturedPost
          FeaturedImage{
            data{
              attributes{
                url
              }
            }
          }
          author{
            data{
              attributes{
                Name
                Photo{
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
      }
    }
  }
  `

  const result = await request(graphqlAPI, query, {Slug});
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

export const getFooterLinks = async () => {
  const query = gql`
  query GetFooterLinks {
    footers{
      data{
        attributes{
          Name
          Slug
          SocialMediaUrl
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);
  return result.footers.data
}