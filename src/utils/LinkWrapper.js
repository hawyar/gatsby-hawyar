import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/core"

export const LinkWrapper = ({ children, to, ...args }) => (
  <Link to={to} as={GatsbyLink} textDecoration="none">
    {children}
  </Link>
)
