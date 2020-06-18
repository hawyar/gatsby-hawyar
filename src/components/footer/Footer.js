import React from "react"
import { Box, Link, Flex, Divider } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
const Footer = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Link as={GatsbyLink} to="/" fontSize="xl" fontWeight="normal">
            №
          </Link>
          <div>
            Made with{" "}
            <Link fontSize="md" href="gatsbyjs.org">
              Gatsby
            </Link>
            ,{" "}
            <Link fontSize="md" href="https://chakra-ui.com/">
              Chakra-UI
            </Link>
            ,{" "}
            <Link fontSize="md" href="https://vercel.com/home">
              Vercel
            </Link>
          </div>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
