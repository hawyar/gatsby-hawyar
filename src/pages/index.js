import React from "react"
import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import Projects from "../components/projects/index"
import { graphql } from "gatsby"
import BlogPreview from "../components/blog-preview/BlogPreview"

export default function Home({ data }) {
  const posts = data.allMdx.edges
  return (
    <div>
      <Layout>
        <Hero />
        <BlogPreview data={posts} />
        <Projects />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
