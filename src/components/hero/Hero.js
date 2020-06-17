import React from "react"
import { Heading, Text, Box, Button, Link } from "@chakra-ui/core"
const Hero = () => {
  return (
    <div>
      <Box
        // grow and center ** reuse **
        width={[
          "100%", // base
          "65%", // 480px upwards
          "55%", // 768px upwards
          "45%", // 992px upwards
        ]}
      >
        <Heading letterSpacing="tight">
          Software Engineer - building cool things for the web with{" "}
          <Link href="https://www.gatsbyjs.org/" isExternal color="purple.600">
            Gatsby
          </Link>
          .
        </Heading>
        <Text mt={6}>
          Use cases for external libraries could be charting libraries for
          adding rich data visualizations, form components for adding email
          signups, styled portions of content like pullquotes
        </Text>

        <Button as="a" href="/" mt={12} size="lg" fontSize="md" color="inherit">
          {" "}
          Get in touch
        </Button>
      </Box>
    </div>
  )
}

export default Hero
