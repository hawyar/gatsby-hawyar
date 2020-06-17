import React from "react"
import Layout from "../components/layout/Layout"
import Blog from "../components/blog/index"
import Hero from "../components/hero/Hero"
import Projects from "../components/projects/index"
import ContactForm from "../components/contact-form/ContactForm"
export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Blog />
        <Projects />
        <ContactForm />
      </Layout>
    </div>
  )
}
