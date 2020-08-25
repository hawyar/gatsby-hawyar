import React from "react"
import Layout from "../components/layout/Layout"
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core"
const About = () => {
  return (
    <div>
      <Layout>
        <Heading as="h1" fontSize="5xl" mb={10}>
          About
        </Heading>
        <Flex justify="space-between" direction={["column-reverse", "row"]}>
          <Box width={["100%", "50%"]}>
            <Box>
              <Text>
                Hey! I am Hawyar a software engineer from beautiful Kurdistan.
              </Text>
            </Box>
          </Box>
          <Image
            rounded="lg"
            height={["auto", "375px"]}
            width="auto"
            src="https://i.ibb.co/MVc80Wq/selfImg.png"
            alt="Hawyar"
            fallbackSrc="https://via.placeholder.com/150"
            mb={["12", "0"]}
          />
        </Flex>
      </Layout>
    </div>
  )
}

export default About
