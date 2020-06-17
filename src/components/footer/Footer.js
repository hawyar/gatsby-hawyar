import React from "react"
import { Box, Link, Flex, useColorMode, Divider } from "@chakra-ui/core"
const Nav = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Link href="/" fontSize="xl" fontWeight="normal">
            №
          </Link>
          <div>
            <Link fontSize="md" href="/blog/all">
              Blog
            </Link>
            <Link ml={12} fontSize="md" href="/About">
              About
            </Link>
          </div>
        </Flex>
      </Box>
    </div>
  )
}

export default Nav
