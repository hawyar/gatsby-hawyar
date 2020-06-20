import React from "react"
import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import Projects from "../components/projects/index"
import ContactForm from "../components/contact-form/ContactForm"
import customTheme from "../theme/theme"
import { ThemeProvider } from "@chakra-ui/core"
require("typeface-cooper-hewitt")

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <Hero />
          <Projects />
          <ContactForm />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
