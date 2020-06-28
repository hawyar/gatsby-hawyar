import React from "react"
import { Heading, Box, Button } from "@chakra-ui/core"
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
          "35%", // 992px upwards
        ]}
      >
        <Heading as="h1" letterSpacing="tight">
          Hi, I'm Hawyar
          <Heading
            as="p"
            fontWeight="500"
            mt={2}
            fontSize="3xl"
            color="gray.500"
          >
            {" "}
            Experienced Software Engineer, obsessed with design systems
          </Heading>
        </Heading>
      </Box>

      <LinkWrapper to="/">
        <Button size="lg" fontSize="md" mt={10}>
          Get in touch
        </Button>
      </LinkWrapper>
    </div>
  )
}

export default Hero
