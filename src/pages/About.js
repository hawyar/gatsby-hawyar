import React from "react"
import Layout from "../components/layout/Layout"
import { Heading, Text, Box, Button, Image, Flex, Link } from "@chakra-ui/core"
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
                Hey! I am Hawyar a software engineer from beautiful Kurdistan. I
                was lived in Kurdistan until 2017. After graduating high school
                in Kurdistan, I moved to the U.S. to pursue Bachelor's degree at{" "}
                <Link href="https://www.manchester.edu/">
                  Manchester University
                </Link>{" "}
                with a major in Software Engineering.
              </Text>

              <Text mt={6}>
                {" "}
                My first lines of code was actually to make animations in After
                Effects. Before After Effects supported Right to Left text I
                used to write expressions to be able to do certain animations.
              </Text>
            </Box>
            <Button
              as="a"
              href="https://calendly.com/hawyarfa/15min"
              mt={12}
              size="lg"
              fontSize="md"
              mb={["6", "0"]}
            >
              {" "}
              Let's have a quick chat
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
