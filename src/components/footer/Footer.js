import React from "react"
import { Box, Link, Flex, Divider } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
const Footer = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Link as={GatsbyLink} to="/" fontSize="md" fontWeight="normal">
            Copyright © 2020, Hawyar
          </Link>
          <div style={{ textAlign: "right" }}>
            Powered by{" "}
            <Link fontSize="md" href="gatsbyjs.org">
              Gatsby
            </Link>
            ,{" "}
            <Link fontSize="md" href="https://chakra-ui.com/">
              chakra-ui
            </Link>
            ,{" "}
            <Link fontSize="md" href="https://netlify.com/">
              Netlify
            </Link>
          </div>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
