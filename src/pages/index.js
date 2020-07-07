import React from "react"
import { Heading, Box, PseudoBox } from "@chakra-ui/core"
import Layout from "../components/layout/Layout"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
import Projects from "../components/projects/index"
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
      <SEO />
      <Layout>
        <Heading fontSize={["2xl", "lg", "xl", "3xl"]}>Blog</Heading>
        <Box mt={6}>
          {posts.map(post => {
            const { title, date, slug } = post

            return (
              <div>
                <Box as={GatsbyLink} to={`/posts/${slug}`} key={slug}>
                  <PseudoBox
                    cursor="pointer"
                    transition="0.38s all ease"
                    mb={3}
                    pt="2"
                    pb="2"
                    _hover={{
                      bg: "gray.700",
                      color: "white",
                      pl: "3",
                    }}
                    rounded="lg"
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
        <Projects />
      </Layout>
    </div>
  )
}

export default Home
