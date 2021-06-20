import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.scss"
import { useSetRecoilState } from "recoil"
import { blogPostTitleState, blogPostSubTitleState } from '../states'



const BlogPostTemplate = ({ data, location,}) => {
  const post = data.markdownRemark
  // const image = post.frontmatter.image.publicURL
  /** Add code to get image from query here **/
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data
  const setHeaderTitle = useSetRecoilState(blogPostTitleState)
  const setHeaderSubTitle = useSetRecoilState(blogPostSubTitleState)
  React.useEffect(() => { 
    setHeaderTitle(post.frontmatter.title)
    setHeaderSubTitle("")
  })
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
  <div className = "outside-container">
    <div className="content-container">
    <img src = {post.frontmatter.image.publicURL} alt = "not found" className = {"image"}></img>
    <div className= "inside-container">
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {/* <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
      </div>
    </div>
  </div>        
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    # $previousPostId: String
    # $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
        }
    }
  }
`
