import React from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import {MarkdownRemark} from '../../templates/post';
import {MarkdownRemarkEdge} from '../../templates/index';

// TODO: ロジックを整理したい
interface Props {
  postNode?: MarkdownRemark;
  postPath?: string; // = slug
  postSEO?: boolean;
  postImgNode?: MarkdownRemarkEdge[];
  postEdges?: MarkdownRemarkEdge[];
}
export const SEORaw = ({
  postNode,
  postPath,
  postSEO,
  postImgNode,
}: Props): JSX.Element => {
  let title;
  let description;
  let image = '';
  let postURL;

  if (postSEO) {
    // Post の詳細画面のとき
    const postMeta = postNode.frontmatter;
    ({title} = postMeta);
    description = postNode.excerpt;

    postURL = urljoin(config.siteUrl, postPath);
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
  }

  // if (postImgNode) {
  //   // TODO:
  //   image = postImgNode.childImageSharp.fluid.src;
  // }

  image = urljoin(config.siteUrl, image);
  const blogURL = config.siteUrl;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    // TODO: tsでerror になるので、いったんコメントアウト
    // schemaOrgJSONLD.push([
    //   {
    //     '@context': 'http://schema.org',
    //     '@type': 'BreadcrumbList',
    //     // TODO:
    //     // itemListElement: [
    //     //   {
    //     //     '@type': 'ListItem',
    //     //     position: 1,
    //     //     item: {
    //     //       '@id': postURL!,
    //     //       name: title!,
    //     //       image,
    //     //     },
    //     //   },
    //     // ],
    //   },
    //   {
    //     '@context': 'http://schema.org',
    //     '@type': 'BlogPosting',
    //     url: blogURL,
    //     name: title,
    //     alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    //     headline: title,
    //     image: {
    //       '@type': 'ImageObject',
    //       url: image,
    //     },
    //     description,
    //   }])
    // };
  }

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* TODO: */}
      <link rel="amphtml" href={`${config.siteUrl}amp/${postPath}`} />
    </Helmet>
  );
};
