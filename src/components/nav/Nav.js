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
          <div>
            <Link fontSize="md" href="/">
              GitHub
            </Link>
            <Link ml={12} fontSize="md" href="/about">
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
