import React from "react"
import { Box } from "@chakra-ui/core"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      position="relative"
      direction="column"
      px={[8, 16, 24, "275px"]}
      display="flex"
      flexDirection="column"
    >
      <Nav />
      <Box flex="1 0 auto">{children}</Box>
      <Box flexShrink="0">
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
