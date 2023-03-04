/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brian Zalewski`,
    siteUrl: `https://brianzalewski.com`,
    description:
      'Brian Zalewski is a full-stack software engineer with 15+ years of experience with varying technologies',
  },
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: `SECRET`,
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
  ]
};