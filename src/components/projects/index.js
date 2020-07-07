import React from "react"
import { Heading, Box, PseudoBox, Grid } from "@chakra-ui/core"

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
      <Box id="projects" mt={32} mb={6}>
        <Grid mt={6} gridTemplateColumns="1fr 1fr" gridColumnGap="16">
          {projects.map(proj => {
            const { name, description, link } = proj

            return (
              <div>
                <Box key={name}>
                  <PseudoBox
                    cursor="pointer"
                    transition="0.38s all ease"
                    mb={3}
                    p="6"
                    pl="1"
                    _hover={{
                      bg: "purple.500",
                      color: "white",
                    }}
                    rounded="lg"
                  >
                    <Heading
                      fontSize={["md", "lg", "xl", "xl"]}
                      fontWeight="500"
                    >
                      {name}
                    </Heading>
                  </PseudoBox>
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
