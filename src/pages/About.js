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
                Hey! I am Hawyar Farooq, 20 year-old Software Engineer from
                beautiful Kurdistan. I actauuly .First I started doing super{" "}
                <Link>cool animations</Link>with After Effects. Back then
              </Text>

              <Text mt={6}>
                {" "}
                Back in my Kurdistan I was working with the great team of kitn.
                As part of their video team I was mainly in charge of making
                short aniated videos. While working on those videos it was
                getting really challenging.
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
