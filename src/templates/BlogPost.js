import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { Heading, Image, Box, Text } from "@chakra-ui/core"
import SEO from "../components/seo/seo"
const BlogPostTemplate = ({
  data: {
    gcms: { post },
  },
}) => {
  const seoImage = post.coverImage.url
  return (
    <div>
      <SEO title={post.title} image={seoImage} description={post.excerpt} />

      <Layout>
        <Box display="flex" flexDirection="column" overflow="hidden">
          <Box
            rounded="lg"
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            height="490px"
          >
            <Image
              rounded="lg"
              width={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              height="100%"
              src={post.coverImage.url}
              objectFit="cover"
            />
          </Box>
          <Heading mt="12" fontSize="4xl">
            {post.title}
          </Heading>
          <Text mt="2">{post.date}</Text>
          <Box mt={12}>{post.content.markdown}</Box>
        </Box>
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostPageQuery($id: ID!) {
    gcms {
      post(where: { id: $id }) {
        title
        date
        excerpt
        content {
          html
          raw
          markdown
        }
        coverImage {
          url(transformation: { image: { resize: { height: 490 } } })
        }
      }
    }
  }
`
