// set SiteConfig
module.exports = {
  // for site
  siteTitle: "ナミキログ", // Site title.
  siteTitleShort: "先端技術を追いかけるエンジニアのブログ", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "ナミキログ", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://snamiki1212.com", // Domain of your website without pathPrefix.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible

  // for RSS
  siteDescription: "先端技術を追いかけるエンジニアのブログ", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.

  // 3rd party
  siteGSCTrackingID: process.env.siteGSCTrackingID, // Tracking code ID for google search console.
  siteFBAppID: process.env.siteFBAppID, // FB Application ID for using app insights
  disqusShortname: process.env.disqusShortname, // Disqus shortname.

  // for post
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD hh:mm", // Date format used in the frontmatter.
  dateFormat: "MMM-Do, YYYY", // Date format for display.
  userName: "Shun Namiki", // Username to display in the author segment.
  userTwitter: "snamiki1212", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Shibuya, Japan", // User location to display in the author segment.
  userAvatar: "/logos/logo_48.jpg", // User avatar to display in the author segment.
  userDescription: "いまどき技術が大好きなエンジニアによる技術と生存戦略などを書く雑記ブログ。SIer4年/Web1年半でお堅い金融システムから最近のスマホゲーム開発までを担当。PHP/LaravelやElixir/Phoenixなどのバックエンドを中心にフロント/インフラを触りながら、エンジニア/ディレクター/チームリーダーなどを経験。更に詳しい経歴はLinkedinを参照。Twitterフォローや仕事依頼や相談など気軽にどうぞ。", // User description to display in the author segment.
  userIntroduction: "Freelance full-stack Endigneer @ Shibuya, Japan", // short user introduction

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/snamiki1212",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/snamiki1212",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:snamiki1212@gmail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/snamiki1212",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "RSS",
      url: "https://snamiki1212.com/rss.xml",
      iconClassName: "fa fa-rss"
    }
  ],
  copyright: "Copyright © 2018. Shun Namiki" // Copyright string for the footer of the website and RSS feed.
};
