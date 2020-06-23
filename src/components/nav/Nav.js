import React from "react"
import {
  Box,
  Link,
  Flex,
  useColorMode,
  IconButton,
  Divider,
} from "@chakra-ui/core"
const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Box py={6}>
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
          <IconButton
            bg="transparent"
            onClick={toggleColorMode}
            aria-label="Color mode"
            icon={colorMode === "light" ? "moon" : "sun"}
          />
        </Flex>
        <Divider mt={4} />
      </Box>
    </div>
  )
}

export default Nav
