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
  const secretLinkMode = { light: "white", dark: "purple.400" }
  return (
    <div>
      <Box>
        <Box py={6}>
          <Flex justify="space-between" align="center">
            <div>
              <Link
                fontSize="md"
                href="/about"
                p="2"
                rounded="md"
                _hover={{ bg: "gray.300", color: "black" }}
              >
                About
              </Link>

              <Link
                ml={[6, 12]}
                fontSize="md"
                href="https://github.com/hawyar"
                _hover={{ bg: "gray.300", color: "black" }}
                p="2"
                rounded="md"
              >
                GitHub
              </Link>
              <Link
                ml={[6, 12]}
                fontSize="md"
                href="https://dribbble.com/Hawyar"
                _hover={{ bg: "gray.300", color: "black" }}
                p="2"
                rounded="md"
                color={secretLinkMode[colorMode]}
              >
                Secret
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
      </Box>
    </div>
  )
}

export default Nav
