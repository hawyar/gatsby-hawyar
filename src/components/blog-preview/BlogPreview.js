import React from "react"
import { Heading, Box, Link, Flex, Text, Grid } from "@chakra-ui/core"
import { FiFeather } from "react-icons/fi"

const BlogPreview = ({ data }) => {
  return (
    <div>
      <Box id="projects" mt={[32, 48]} mb={[32, 48]}>
        <Flex align="center" justify="space-between" mb={[12, 8]}>
          <Flex>
            <Box as={FiFeather} size={5} mr={3} />
            <Heading as="h3" fontSize="lg">
              Blog
            </Heading>
          </Flex>
          <Text as="h3" fontSize="md">
            All posts
          </Text>
        </Flex>
        <Grid
          templateColumns={{ sm: "repeat(3, 1fr)" }}
          columnGap={16}
          rowGap={16}
        >
          {data.map(el => {
            return (
              <div key={el.node.fields.slug}>
                <Box>
                  <Link
                    href={el.node.fields.slug}
                    _hover={{
                      color: "purple.600",
                      textDecoration: "underline",
                    }}
                    lineHeight="none"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    {el.node.frontmatter.title}
                  </Link>

                  <Text mt={3}>{el.node.frontmatter.date}</Text>
                  <Text mt={3}>{el.node.frontmatter.excerpt}</Text>
                </Box>
              </div>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default BlogPreview
