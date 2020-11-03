module.exports = {
  siteMetadata: {
    title: `Feminist Coalition.`,
    description: `The feminist coalition is a group of young Nigerian feminists formed in July 2020 with a mission to champion equality for women in Nigerian society with a core focus on education, financial freedom and representation in public office.`,
    author: `@bethel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Feminist Co.`,
        short_name: `Feminist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/femco.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
