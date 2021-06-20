import * as React from "react"
import { Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blogs.scss"
import { useSetRecoilState } from "recoil"
import { blogPostTitleState, blogPostSubTitleState } from '../states'
import Pager from "../components/Pager"

const BlogsIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges
  const setHeaderTitle = useSetRecoilState(blogPostTitleState) 
  const setHeaderSubTitle = useSetRecoilState(blogPostSubTitleState) 
  React.useEffect(() => {
    setHeaderTitle("Blog")
    setHeaderSubTitle("HOME/ BLOG")
  })
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div>
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className ={"container"}>
        {posts.map(post => {
          const title = post.node.frontmatter.title || post.fields.slug

          return (
            <Link className = {"link"} to = {post.node.fields.slug} itemProp="url">
              <div className = {"card"} key= {post.node.fields.slug}>
                <img src = {post.node.frontmatter.image.publicURL} alt = "not found" className = {"image"}></img>
                <div className = {"content"}>
                  <div className = {"date"}>{post.node.frontmatter.date}</div>
                  <h3 className ={"title"}>
                    <span itemProp = "headline">{title}</span>
                  </h3>
                  <div className = {"excerpt"}
                    dangerouslySetInnerHTML={{
                      __html: post.node.frontmatter.description|| post.node.excerpt,
                    }}
                    itemProp="description"
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
       <Pager countPages={pageContext.countPages} currentPage={pageContext.page} root={"blog"}/>
    </Layout>
  </div>
  )
}

export default BlogsIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!){

    site {
    siteMetadata {
      title
    }
  }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order:ASC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image {
            publicURL
          }
         
          }
          fields {
          slug
        }
        
        }

        
      }
    }
  }`

