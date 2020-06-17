import React from "react"
import { Box, Link, Flex, Divider, Text } from "@chakra-ui/core"

const Footer = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Link href="/" fontSize="xl" fontWeight="normal">
            №
          </Link>
          <Flex direction="row">
            <Link isExternal>
              <Text display="block">Twitter</Text>
            </Link>
            <Link isExternal ml={12}>
              <Text display="block">Github</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
