import React from "react"
import { Box, Flex, Divider, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
const Nav = () => {
  return (
    <div>
      <Box py={6}>
        <Flex justify="space-between" align="center">
          <Link as={GatsbyLink} to="/">
            №
          </Link>
          <Box>
            <Link mr={12} as={GatsbyLink} to="/blog/all">
              Blog
            </Link>
            <Link as={GatsbyLink} to="/About">
              About
            </Link>
          </Box>
        </Flex>
        <Divider mt={4} />
      </Box>
    </div>
  )
}

export default Nav
