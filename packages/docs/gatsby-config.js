module.exports = {
  siteMetadata: {
    title: `Astro Galaxy`,
    description: `Awesome React UI library for Magnetis' design system`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
  ],
};
