import React from "react"
import {
  Box,
  Link,
  Flex,
  // useColorMode,
  // IconButton,
  Divider,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
const Nav = () => {
  // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Box>
        <Box py={6}>
          <Flex justify="space-between" align="center">
            <div>
              <Link
                as={GatsbyLink}
                fontSize="md"
                to="/about"
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
              >
                Dribbble
              </Link>
            </div>

            {/* <IconButton
              bg="transparent"
              onClick={toggleColorMode}
              aria-label="Color mode"
              icon={colorMode === "light" ? "moon" : "sun"}
            /> */}
          </Flex>
          <Divider mt={4} />
        </Box>
      </Box>
    </div>
  )
}

export default Nav
