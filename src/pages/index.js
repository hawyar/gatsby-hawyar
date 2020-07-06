import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Heading, Box, PseudoBox, Divider } from "@chakra-ui/core"
import Layout from "../components/layout/Layout"
import { Link as GatsbyLink } from "gatsby"

const pageQuery = graphql`
  {
    gcms {
      posts {
        slug
        title
        tags
        excerpt
        date
      }
    }
  }
`

const Home = () => {
  const {
    gcms: { posts },
  } = useStaticQuery(pageQuery)
  return (
    <div>
      <Layout>
        <Heading fontSize={["2xl", "lg", "xl", "3xl"]}>Writings</Heading>
        <Box mt={6}>
          {posts.map(post => {
            const { title, date, slug } = post

            return (
              <div>
                <Box as={GatsbyLink} to={`/posts/${slug}`}>
                  <PseudoBox
                    cursor="pointer"
                    transition="0.38s all ease"
                    _hover={{ bg: "gray.700", color: "white", p: "3" }}
                    rounded="lg"
                    mt={6}
                  >
                    <Heading
                      fontSize={["md", "lg", "xl", "xl"]}
                      fontWeight="500"
                    >
                      {title}
                    </Heading>

                    <p fontSize="md">{date}</p>
                  </PseudoBox>
                </Box>
              </div>
            )
          })}
        </Box>
      </Layout>
    </div>
  )
}

export default Home
