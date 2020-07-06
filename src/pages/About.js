import React from "react"
import Layout from "../components/layout/Layout"
import { Heading, Text, Box, Button, Image, Flex } from "@chakra-ui/core"
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
                Hey! I am Hawyar Farooq, a 20 year-old Software Engineer from
                the beautiful Kurdistan. Currently, pursuing a B.S in Software
                Engineer in the U.S. My programming background is derived from
                however in the last two years I have branched out to web
                development mainly developing websites using React js.
              </Text>

              <Text mt={6}>
                {" "}
                Hey! I am Hawyar Farooq, a 20 year-old Software Engineer from
                the beautiful country of Kurdistan. Currently, pursuing a B.S in
                Software Engineer in the U.S. My programming background is
                derived from however in the last two years I have branched out
                to web development mainly developing websites using React js.
              </Text>
            </Box>
            <Button
              as="a"
              href="/"
              mt={12}
              size="lg"
              fontSize="md"
              mb={["6", "0"]}
            >
              {" "}
              Let's Chat
            </Button>
          </Box>
          <Image
            rounded="lg"
            height={["auto", "375px"]}
            width="auto"
            src="https://i.ibb.co/MVc80Wq/selfImg.png"
            alt="Segun Adebayo"
            fallbackSrc="https://via.placeholder.com/150"
            mb={["12", "0"]}
          />
        </Flex>
      </Layout>
    </div>
  )
}

export default About
