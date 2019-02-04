import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const PostTemplate = ({data: post}) => (
  <Layout>
  <Seo title={post.markdownRemark.frontmatter.title} keywords={post.markdownRemark.frontmatter.seo}/>
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <h4>{post.markdownRemark.timeToRead} {post.markdownRemark.timeToRead > 1 ?  'minutes' : 'minute'}</h4>
      <div dangerouslySetInnerHTML={{__html: post.markdownRemark.html}}/>
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {
      slug: { eq: $slug }
    }) {
      html
      timeToRead
      frontmatter {
        title
        seo
      }
    }
  }
`

export default PostTemplate
