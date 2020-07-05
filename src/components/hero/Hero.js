import React from "react"
import { Heading, Box, Image, Text } from "@chakra-ui/core"
import { LinkWrapper } from "../../utils/LinkWrapper"

// import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const Hero = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        overflow="hidden"
        // responsive box
        // width={[
        //   "100%", // base
        //   "65%", // 480px upwards
        //   "55%", // 768px upwards
        //   "55%", // 992px upwards
        // ]}
      >
        <Box
          rounded="lg"
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
          height="400px"
        >
          <Image
            rounded="lg"
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            height="100%"
            src="https://cdn.dribbble.com/users/2146089/screenshots/12757149/media/fa3bbd09a17090acc55cd3b65e43baa6.png"
            objectFit="cover"
          />
        </Box>
        <Heading mt="12" fontSize="4xl">
          Consistent design systems using theme-ui across UX edge points
        </Heading>
      </Box>
    </div>
  )
}

export default Hero
