import React from "react"
import { Heading, Box, Link, Flex, Text, Grid } from "@chakra-ui/core"
import { FiEdit } from "react-icons/fi"

const projects = [
  {
    name: "Pefromant animations in Reat using GSAP & Power4",
    description:
      "Gatsby’s rich data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs",
    link: "/",
  },
  {
    name: "Pefromant fdsdfsdf in Reat using GSAP & Power4",
    description:
      "Gatsby’s rich data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs",
    link: "/",
  },
  {
    name: "A digital platform for better job opportunities in Kurdistan",
    description:
      "Gatsby’s data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs",
    link: "/blog/digital-saas-kurdistan",
  },
]

const Projects = () => {
  return (
    <div>
      <Box id="projects" mt={[32, 48]} mb={[32, 48]}>
        <Flex align="center" justify="space-between" mb={[12, 8]}>
          <Flex>
            <Box as={FiEdit} size={5} mr={3} />
            <Heading as="h3" fontSize="lg">
              Projects
            </Heading>
          </Flex>
          <Text as="h3" fontSize="md">
            All Projects
          </Text>
        </Flex>
        <Grid gridTemplateRows="repeat(3, 1fr)" columnGap={16} rowGap={16}>
          {projects.map(el => {
            return (
              <div key={el.name}>
                <Box>
                  <Link
                    href={el.link}
                    _hover={{
                      color: "purple.600",
                      textDecoration: "underline",
                    }}
                    lineHeight="none"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    {el.name}
                  </Link>

                  <Text mt={3}>{el.description}</Text>
                </Box>
              </div>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default Projects
