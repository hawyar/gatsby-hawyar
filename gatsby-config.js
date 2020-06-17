module.exports = {
  siteMetadata: {
    title: `Hawyar farooq`,
    siteUrl: `https://www.hawyar.com`,
    titleTemplate: "%s · The Real Hero",
    description: `Hawyar Farooq - Software Engineer`,
    twitterUsername: `@HawyarFarooq`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haywra Farooq - Portfolio`,
        short_name: "Hawyar Farooq",
        description: `Hawyar Farooq - Portfolio`,
        lang: `en`,
        start_url: "/",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    //mdx

    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter`,
          `muli\:400,400i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
}
