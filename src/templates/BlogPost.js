import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import { Heading, Image, Box, Text } from "@chakra-ui/core"

const BlogPostTemplate = ({
  data: {
    gcms: { post },
  },
}) => {
  return (
    <div>
      <Layout>
        <Box
          display="flex"
          flexDirection="column"
          overflow="hidden"
          // responsive box
          // width={[
          //   "100%", // base
          //   "65%", // 480px upwards
          //   "55%", // 768px upwards
          //   "55%", // 992px upwards
          // ]}
        >
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
          <Text mt="4">{post.date}</Text>
          <div>{post.content.markdown}</div>
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
