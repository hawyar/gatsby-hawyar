import React from "react"
import { Heading, Box, Link, Flex, Text, Grid } from "@chakra-ui/core"
import { FiFeather } from "react-icons/fi"
import { LinkWrapper } from "../../utils/LinkWrapper"
import { Link as GatsbyLink } from "gatsby"

const BlogPreview = ({ data }) => {
  return (
    <div>
      <Box id="projects" mt="32" mb={[32, 48]}>
        <Flex align="center" justify="space-between" mb={[12, 8]}>
          <Flex>
            <Box as={FiFeather} size={5} mr={3} />
            <Heading as="h3" fontSize="lg" fontWeight="400">
              Blog
            </Heading>
          </Flex>
          {/* <Text as="h3" fontSize="md">
            All posts
          </Text> */}
        </Flex>
        <Grid
          gridTemplateRows="repeat(3, 1fr)"
          columnGap={16}
          rowGap={16}
          textDecoration="none"
        >
          {data.map(el => {
            return (
              <Box key={el.node.fields.slug}>
                <Link
                  to={el.node.fields.slug}
                  _hover={{ textDecoration: "none" }}
                >
                  <Box
                    rounded="md"
                    _hover={{ bg: "green.400" }}
                    width="100%"
                    height="100%"
                    cursor
                  >
                    <Heading
                      as="h1"
                      lineHeight="none"
                      fontSize="3xl"
                      fontWeight="bold"
                      as={GatsbyLink}
                    >
                      {" "}
                      {el.node.frontmatter.title}
                    </Heading>
                    <Text mt="6">{el.node.frontmatter.excerpt}</Text>
                  </Box>
                </Link>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default BlogPreview
