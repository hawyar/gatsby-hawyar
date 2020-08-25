import React from "react"
import { Heading, Box, Button } from "@chakra-ui/core"
import Layout from "../components/layout/Layout"
// import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo/seo"
// const pageQuery = graphql`
//   {
//     allGraphCmsPost(limit: 10) {
//       edges {
//         node {
//           date
//           slug
//           title
//           publishedAt
//           tags
//           id
//         }
//       }
//     }
//   }
// `

const Home = () => {
  // const { posts } = useStaticQuery(pageQuery)
  return (
    <div>
      <SEO />
      <Layout>
        <Box mt="12">
          <Heading fontSize={["2xl", "lg", "xl", "3xl"]}>
            Passionate Software Engineer with a focus on about web design &
            micro-services
          </Heading>
        </Box>
        <Button
          as="a"
          href="https://calendly.com/hawyarfa/15min"
          mt={12}
          size="lg"
          fontSize="md"
          mb={["6", "0"]}
        >
          {" "}
          Let's have a quick chat
        </Button>
      </Layout>
    </div>
  )
}

export default Home
