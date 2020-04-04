const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Nicholas Colletti',
    author: 'Nicholas Colletti',
    siteUrl: `https://ncolletti.com`
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
]
}


