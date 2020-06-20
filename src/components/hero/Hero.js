import React from "react"
import { Heading, Text, Box, Button, Link } from "@chakra-ui/core"
import TextLoop from "react-text-loop"
const Hero = () => {
  const heroTextLoop = [
    {
      text: "doing some CSS magic",
      color: "teal.600",
      isExternal: true,
      link: "https://www.gatsbyjs.org/",
    },
    {
      text: "lost in Gatsby's docs",
      color: "purple.600",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
    {
      text: "doing some CSS magic",
      color: "orange.600",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
    {
      text: "moving keyframes",
      color: "blue.600",
      isExternal: true,
      link: "https://www.gatsbyjs.org/docs",
    },
    {
      text: "drinking a lot of coffee",
      color: "green.600",
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
          Your favorite Software Engineer currently
        </Heading>
        <TextLoop>
          {heroTextLoop.map(el => {
            return (
              <Link key={el} href={el.link} isExternal color={el.color}>
                <span>{el.text}</span>
              </Link>
            )
          })}
        </TextLoop>

        <Text mt={6} width={["100%", "85%"]}>
          Use cases for external libraries could be charting libraries for
          adding rich data visualizations, form components for adding email
          signups, styled portions of content like pullquotes
        </Text>
        <Button mt={12} size="lg" fontSize="md" bg="gray.700" color="gray.50">
          Get in touch
        </Button>
      </Box>
    </div>
  )
}

export default Hero
