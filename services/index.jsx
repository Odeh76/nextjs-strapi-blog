import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT

export const getPosts = async () => {
    const query = gql`
    query getPosts {
      posts{
        data{
          attributes{
            Title
            slug
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

export const getPostDetails = async (slug) => {
  const query = gql`
  query GetPostDetails($slug: String) {
    posts(filters: {slug:{eq:$slug}}){
      data{
        attributes{
          Title
          slug
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

  const result = await request(graphqlAPI, query, {slug});
  return result.posts.data
}

export const getCategories = async () => {
  const query = gql`
  query GetCategories{
    categories{
      data{
        attributes{
          Name
          slug
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
          slug
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
          slug
          SocialMediaUrl
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);
  return result.footers.data
}

export const onClickMailToHandler = (e) => {
  e.preventDefault();
  window.location.href = 'mailto:abdullahsayshello@gmail.com'
}