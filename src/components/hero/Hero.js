import React from "react"
import { Heading, Text, Box, Button, Link } from "@chakra-ui/core"
import { LinkWrapper } from "../utils/LinkWrapper"

// import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Hero = () => {
  return (
    <div>
      <Box
        overflow="hidden"
        // grow and center ** reuse **
        width={[
          "100%", // base
          "65%", // 480px upwards
          "55%", // 768px upwards
          "45%", // 992px upwards
        ]}
      >
        <Heading letterSpacing="tight">
          Experienced Software Engineer - currently busy building{" "}
          <Link color="gray.500">Norem</Link>
        </Heading>

        <Text mt={6} mb={12} width={["100%", "85%"]}>
          Hey, I am Hawyar - Software Engineer living in beautiful Fort Wayne.
        </Text>
      </Box>

      <LinkWrapper to="/">
        <Button size="lg" fontSize="md">
          Get in touch
        </Button>
      </LinkWrapper>
    </div>
  )
}

export default Hero
