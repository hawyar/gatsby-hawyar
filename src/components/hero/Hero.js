import React from "react"
import { Heading, Text, Box, Icon, Link } from "@chakra-ui/core"
import TextLoop from "react-text-loop"
const Hero = () => {
  const heroTextLoop = [
    {
      text: "hunting bugs",
      color: "orange",
      isExternal: true,
      link: "https://www.gatsbyjs.org/",
    },
    {
      text: "lost in the docs",
      color: "purple",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
    {
      text: "moving keyframes",
      color: "blue",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
    {
      text: "drinking a lot of coffee",
      color: "teal",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
  ]
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
          Your favorite Software Engineer currently -
        </Heading>

        <TextLoop>
          {heroTextLoop.map(el => {
            return (
              <Link key={el} href={el.link} isExternal color={el.color}>
                <Text
                  letterSpacing="tight"
                  fontSize={["1.875rem", "2.25rem"]}
                  fontWeight="700"
                  // to change all color saturation
                  color={`${el.color}.700`}
                >
                  {el.text}
                </Text>
              </Link>
            )
          })}
        </TextLoop>

        <Text mt={6} mb={12} width={["100%", "85%"]}>
          Use cases for external libraries could be charting libraries for
          adding rich data visualizations, form components for adding email
          signups, styled portions of content like pullquotes
        </Text>
      </Box>

      <Link href="#footer" isExternal>
        Get in touch <Icon name="arrow-forward" mx="2px" />
      </Link>
    </div>
  )
}

export default Hero
