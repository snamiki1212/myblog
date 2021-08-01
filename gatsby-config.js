// const urljoin = require('url-join');
const config = require('./data/SiteConfig'); // eslint-disable-line @typescript-eslint/no-var-requires
const envConfig = require('./data/EnvConfig'); // eslint-disable-line @typescript-eslint/no-var-requires

const regexExcludeRobots =
  /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,

    // MEMO: rss は使わないことにしたので無効化
    // rssMetadata: {
    //   site_url: config.siteUrl,
    //   feed_url: urljoin(config.siteUrl, config.siteRss),
    //   title: config.siteTitle,
    //   description: config.siteDescription,
    //   image_url: `${config.siteUrl}/logos/logo-512.jpg`,
    //   copyright: config.copyright,
    // },
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    /**
     * 'gatsby-source-filesystem'
     */
    {
      // 画像系
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/contents/`,
        ignore: [`**/*.md`],
      },
    },
    {
      // markdown
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/contents/`,
        ignore: [`**/*.jpg`, `**/*.jpeg`, `**/**.png`, `**/*.gif`, `**/*.svg`], // TODO: gif など他のファイルを入れる。ignore ではなくて、only がほしいけど、ないぽい。
      },
    },
    {
      // asset
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`,
      },
    },

    {
      // Markdown >> HTML などにパースしてくれるライブラリのプラグイン
      resolve: 'gatsby-transformer-remark',
      options: {
        // TODO: HTML >> Markdown >> Reactを これでできるかもしれないので、確認。https://www.gatsbyjs.org/packages/gatsby-remark-component/
        plugins: [
          // {
          //   // 外部ファイルの参照などを行う。画像周りで、gifなどがgatsyby-imagesなどでの対象外なので、こいつをいれておく必要がある？
          //   // こいつをいれると、画像パスが不整合になって、違う投稿の画像が表示されちゃうみたいなので入れてはいけないぽい。
          //   resolve: 'gatsby-remark-relative-images',
          // },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-graphviz', // Graphizを利用可能にする。ATTENTION: prism-jsのプラグインの前に宣言しないといけない
          {
            resolve: 'gatsby-remark-autolink-headers',
            // H1~6 の先頭に リンクが生成されるプラグイン
            // ATTENTION: prism-jsのプラグインの前に宣言しないといけない
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },
          'gatsby-remark-copy-linked-files', // markdown で呼び出しているファイルを /public などにコピーする機能。 gif/svg などはremark--images の取り扱い対象外なので、これが必要(readme: https://www.gatsbyjs.org/packages/gatsby-remark-images/)
          'gatsby-remark-prismjs', // code-hilight 用
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: envConfig.siteGATrackingID,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#c62828',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links', // サイト内をaタグで移動しても、catchしてgatsbyのLinkでの移動として処理してくれる
    'gatsby-plugin-twitter', // TODO: いるか、あやしい
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
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
        }`,
      },
    },
    {
      // LINK: https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
      // LINK: https://developers.google.com/web/fundamentals/web-app-manifest/
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort, // eslint-disable-line @typescript-eslint/camelcase
        description: config.siteDescription,
        background_color: '#e0e0e0', // eslint-disable-line @typescript-eslint/camelcase
        theme_color: '#c62828', // eslint-disable-line @typescript-eslint/camelcase
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },

    'gatsby-plugin-offline', // NOTE: this plugin has to be AFTER gatsby-plugin-manifest.

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Philosopher'],
        },
      },
    },
  ],
};
