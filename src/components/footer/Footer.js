import React from "react"
import { Box, Link, Flex, useColorMode, Divider, Text } from "@chakra-ui/core"

const Footer = () => {
  return (
    <div>
      <Box py={6}>
        <Divider mb={4} />
        <Flex justify="space-between" align="center">
          <Link href="/" fontSize="xl" fontWeight="normal">
            №
          </Link>
          <div>
            <Text fontSize={["sm", "md"]} isExternal>
              Made with <Link href="https://www.gatsbyjs.org">Gatsby</Link> &{" "}
              <Link href="https://chakra-ui.com">Chakra-UI</Link>
              {/* <Icon name="arrow-forward" /> */}
            </Text>
          </div>

          {/* <IconButton as="a" icon={FaTwitter} fontSize="sm" size="lg" /> */}
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
