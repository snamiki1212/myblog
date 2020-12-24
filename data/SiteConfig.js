'use strict';

// set SiteConfig
module.exports = {
  // for site
  siteTitle: 'Gatsby Starter Lunash', // Site title.
  siteTitleShort: 'This is gatsby starter a.k.a Lunash',
  siteTitleAlt: 'Lunash', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://example.com', // Domain of your website without pathPrefix.
  siteRepository: 'https://github.com/snamiki1212/gatsby-starter-lunash', // Repository of your site

  // blog-card
  blogCardLogo: '/blogcard.png', // 暫定。参照先のOGPとか取りたい。

  // for RSS
  siteDescription: 'hogehoge', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.

  // 3rd party
  siteGSCTrackingID: process.env.siteGSCTrackingID, // Tracking code ID for google search console.
  siteFBAppID: process.env.siteFBAppID, // FB Application ID for using app insights

  // for post
  dateFromFormat: 'YYYY-MM-DD hh:mm', // Date format used in the frontmatter.
  dateFormat: 'YYYY/MM/DD', // Date format for display.
  userName: 'Nash', // Username to display in the author segment.
  userTwitter: 'hoge', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'hoge', // User location to display in the author segment.
  userAvatar: '/logos/logo_48.jpg', // User avatar to display in the author segment.
  userDescription: 'hoge hoge', // User description to display in the author segment.
  userIntroduction: 'Developer', // short user introduction
  jobTitle: 'Developer',
  email: 'example@exmaple.com',

  // for side-bar
  autherName: 'hoge',

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  mySocials: [
    {
      icon: 'github',
      url: 'https://github.com/snamiki1212',
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/snamiki1212',
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/snamiki1212',
    },
    // TODO: Qiita
    // TODO: Quora
    // MEMO: RSS 使う人いないだろうから、コメントアウト
    // {
    //   icon: 'RSS',
    //   url: 'https://snamiki1212.com/rss.xml',
    // },
  ],
  copyright: 'Copyright © 2019. Shun Namiki', // Copyright string for the footer of the website and RSS feed.
};
