const config = require("./data/SiteConfig");
const urljoin = require("url-join");

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images"
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 672
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#c62828"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Material Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }]
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields { slug }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss
          }
        ]
      }
    }
  ]
};
