module.exports = {
  siteTitle: "NAMIKI LOG", // Site title.
  siteTitleShort: "先端技術を追いかけるエンジニアのブログ", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "NAMIKI LOG", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://snamiki1212", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "先端技術を追いかけるエンジニアのブログ", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY-MM-DD", // Date format for display.
  userName: "Shun Namiki", // Username to display in the author segment.
  userTwitter: "snamiki1212", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Shibuya, Japan", // User location to display in the author segment.
  userAvatar: "/logos/logo_48.jpg", // User avatar to display in the author segment.
  userDescription:
  "今どき技術が好きなエンジニアによる技術と生存戦略を中心にした雑記ブログ。SIer4年/Web1年半でお堅い金融システムから最近のスマホゲーム開発までを担当して、ロール的にはバックエンドを中心にフロント/インフラを触りながらディレクター/ディベロッパー/チームリーダーなどをこなしてきた。言語はPHP/LaravelからElixir/Phoenixなど。仕事依頼やTwitterフォロー、IT系の相談など気軽にどうぞ。経歴の詳細はLinkedinを参照。", // User description to display in the author segment.
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
    }    
  ],
  copyright: "Copyright © 2018. Shun Namiki" // Copyright string for the footer of the website and RSS feed.
};
