import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Heading, Box, PseudoBox, Divider } from "@chakra-ui/core"
import Layout from "../components/layout/Layout"

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
        <Heading fontSize="md">Posts</Heading>
        <Box mt={12}>
          {posts.map(post => {
            const { title, date, slug } = post

            return (
              <div>
                <PseudoBox
                  // _hover={{ bg: "gray.700", color: "white" }}
                  rounded="lg"
                  pb={6}
                >
                  <Link
                    to={`/posts/${slug}`}
                    fontSize={["md", "lg", "xl", "2xl"]}
                  >
                    {title}
                  </Link>

                  <p>{date}</p>
                </PseudoBox>
              </div>
            )
          })}
        </Box>
        <Divider />
      </Layout>
    </div>
  )
}

export default Home
