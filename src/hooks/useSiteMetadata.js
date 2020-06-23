import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
          titleTemplate
          twitterUsername
        }
      }
    }
  `)
  return site.siteMetadata
}
