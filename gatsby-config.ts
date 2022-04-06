import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-typescript`,],
  pathPrefix: `/google-calendar-filter`,
};

export default config;
