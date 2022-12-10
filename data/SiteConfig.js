'use strict';

// set SiteConfig
module.exports = {
  // for site
  siteTitle: 'Lunash', // Site title.
  siteTitleShort:
    '先端技術を追いかけるエンジニアのブログ🌙 | ITテクノロジー💻、キャリア💼、買って良かったもの🏆、英語📝、など幅広く発信。', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Lunash', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://snamiki1212.com', // Domain of your website without pathPrefix.
  siteRepository: 'https://github.com/snamiki1212/myblog', // Repository of your site

  // blog-card
  blogCardLogo: '/blogcard.webp', // 暫定。参照先のOGPとか取りたい。

  // for RSS
  siteDescription: '先端技術を追いかけるエンジニアのブログ', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.

  // 3rd party
  siteGSCTrackingID: process.env.siteGSCTrackingID, // Tracking code ID for google search console.
  siteFBAppID: process.env.siteFBAppID, // FB Application ID for using app insights

  // for post
  dateFromFormat: 'YYYY-MM-DD hh:mm', // Date format used in the frontmatter.
  dateFormat: 'YYYY/MM/DD', // Date format for display.
  userName: 'Nash', // Username to display in the author segment.
  userTwitter: 'snamiki1212', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Shibuya, Japan', // User location to display in the author segment.
  userAvatar: '/avator.webp', // User avatar to display in the author segment.
  userDescription:
    'ソフトウェアエンジニア。国際決済金融SE⇒スタートアップでソフトウェアエンジニア⇒フリーランス=>カナダで就職⇒日本に帰国。夢は月で生活すること。', // User description to display in the author segment.
  userIntroduction: 'Freelance Engineer', // short user introduction
  jobTitle: 'SoftwareEngineer',
  email: 'snamiki1212@gmail.com',

  // for side-bar
  autherName: 'Nash',

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
  copyright: '© 2019 Shun Namiki', // Copyright string for the footer of the website and RSS feed.
};
