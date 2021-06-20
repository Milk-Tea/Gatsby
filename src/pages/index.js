import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { useSetRecoilState } from "recoil"
import { blogPostTitleState,blogPostSubTitleState } from '../states'
import {StaticImage} from "gatsby-plugin-image"
import "./index.scss"

const BlogIndex = ({location, data}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const setHeaderTitle = useSetRecoilState(blogPostTitleState) 
    const setHeaderSubTitle = useSetRecoilState(blogPostSubTitleState) 
    React.useEffect(() => {
    setHeaderTitle("Home")
    setHeaderSubTitle("Home")
  })
   return (
    <Layout location={location} title={siteTitle} >
  <div className = "outside-container">  
      <div className = "home-image">
        <StaticImage src = "../images/giraffe.jpg" alt = "a giraffe"/>
        <StaticImage src = "../images/racoon.jpg" alt = "a racoon"/>
        <StaticImage src = "../images/animal.jpg" alt = "an animal"/>
      </div>
  </div>
    </Layout>
   )

}

export const pageQuery = graphql`
  query{

    site {
    siteMetadata {
      title
    }
  }
  }`

export default BlogIndex