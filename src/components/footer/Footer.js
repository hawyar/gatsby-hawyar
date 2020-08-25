import React from "react"
import { Box, Link, Flex, Divider } from "@chakra-ui/core"
// import { Link as GatsbyLink } from "gatsby"
import { FaHeart } from "react-icons/fa"
const Footer = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Box
            style={{ textAlign: "right" }}
            display="flex"
            alignItems="center"
            fontSize="sm"
          >
            {" "}
            Made with <Box as={FaHeart} ml={1} mr={1} /> and
            <Link fontSize="sm" href="https://www.gatsbyjs.org/" ml={1}>
              Gatsby
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
