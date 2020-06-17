import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../../components/layout/Layout"
import { Box, Text } from "@chakra-ui/core"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <Layout>
        {posts.map(({ node }) => {
          const { title, author } = node.frontmatter

          return (
            <Box>
              <header>
                <Text>{title}</Text>
                <Text>Post by: {author}</Text>
              </header>

              <br />
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>View Article</Link>
            </Box>
          )
        })}
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
