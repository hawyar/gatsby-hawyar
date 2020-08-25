import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Heading, Image, Box, Text, Flex } from "@chakra-ui/core"
import SEO from "../components/seo/seo"

const BlogPostTemplate = ({
  data: {
    gcms: { post },
  },
  pageContext: { next, prev },
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
          <Heading mt="12" fontSize="5xl" color="ea9a96">
            {post.title}
          </Heading>
          <Text mt="4">{post.date}</Text>
          <Box mt={12}>
            <div
              dangerouslySetInnerHTML={{ __html: `${post.content.html}` }}
            ></div>
          </Box>
        </Box>
        <Flex mt={20} justify="space-between">
          <Box>
            {prev && (
              <Link to={`/posts/${prev.slug}`} rel="prev" color="brand.700">
                ← {prev.title}
              </Link>
            )}
          </Box>

          <Box>
            {next && (
              <Link to={`/posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </Box>
        </Flex>
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query postQuery($id: ID!) {
    allGraphCmsPost(limit: 10) {
      edges {
        node {
          date
          slug
          title
          publishedAt
          tags
          id
          coverImage {
            width
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          createdAt
        }
      }
    }
  }
`
