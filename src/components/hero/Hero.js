import React from "react"
import { Heading, Text, Box, Icon, Button, Link } from "@chakra-ui/core"
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
          Use cases for external libraries could be charting libraries for
          adding rich data visualizations, form components for adding email
          signups, styled portions of content like pullquotes
        </Text>
      </Box>

      <LinkWrapper to="/">
        <Button size="lg" fontSize="md">
          Get in touch <Icon marginLeft={3} name="arrow-forward" />
        </Button>
      </LinkWrapper>
    </div>
  )
}

export default Hero
