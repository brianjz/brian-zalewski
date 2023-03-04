/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Brian Zalewski`,
    siteUrl: `https://brianzalewski.com`,
    description: 'Brian Zalewski is a full-stack software engineer with 15+ years of experience with varying technologies',
  },
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'favicon.ico'
        },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: process.env.DB_CONN,
        dbName: `brianzalewski`, 
        collection: [ `jobs`, `projects` ] 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-335756-13"
        ]
      }
    },
  ]
};