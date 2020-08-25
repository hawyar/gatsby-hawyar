require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hawyar Farooq`,
    author: `Hawyar`,
    owner: "Hawyar Farooq",
    url: `https://www.hawyar.com`,
    siteUrl: `https://www.hawyar.com`,
    titleTemplate: "%s · Hawyar",
    description: `Hawyar's personal website`,
    twitterUsername: `@HawyarFarooq`,
    image: `/src/assets/images/selfImg.png`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haywra Farooq - Software Engineer`,
        short_name: "hawyarfarooq",
        description: `Hawyar's personal website`,
        lang: `en`,
        start_url: "/",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/favicon/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        downloadLocalImages: true,
        // converts rich text to markdown nodes
        // buildMarkdownNodes: true,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        // isUsingColorMode: true,  // fix style flash on refresh
      },
    },
  ],
}
