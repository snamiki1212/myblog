import React from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import {MarkdownRemark} from '../../templates/post';
import {MarkdownRemarkEdge} from '../../templates/index';

const fetchData =
  // helper
  ({isPost, postNode}: {isPost: boolean; postNode: MarkdownRemark}): any => {
    const blogURL = config.siteUrl;
    const {title, description, image, postURL, category} = isPost
      ? {
          // Post の詳細画面のとき
          title: postNode.frontmatter.title,
          description: postNode.excerpt,
          image: urljoin(
            config.siteUrl,
            postNode.frontmatter.cover.childImageSharp.fluid.src
          ),
          postURL: urljoin(config.siteUrl, postNode.frontmatter.slug),
          category: postNode.frontmatter.category,
        }
      : {
          // それ以外の画面のとき
          title: config.siteTitle,
          description: config.siteDescription,
          image: urljoin(config.siteUrl, config.siteLogo),
          postURL: blogURL,
          category: '',
        };

    const person = {
      // README: https://schema.org/Person
      '@context': 'http://schema.org',
      '@type': 'Person',

      // TODO: configへ移動
      name: 'Nash',
      jobTitle: 'SoftwareEngineer',
      gender: 'male',
      email: 'snamiki1212@gmail.com',
    };

    const webSite = {
      // README: https://schema.org/WebSite
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      //
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      creator: person,
    };

    const breadCrumbList = isPost
      ? // README: https://developers.google.com/search/docs/data-types/breadcrumb

        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: category, // TODO: categoryの名前
              item: urljoin(config.siteUrl, category),
            },
          ],
        }
      : {};

    const organization = {
      // README: https://schema.org/Organization
      '@context': 'http://schema.org',
      '@type': 'Organization',
      //
      name: 'Lunash', // TODO: config に移動
      logo: {
        '@type': 'ImageObject',
        url: image,
      },
    };

    const article = isPost
      ? {
          // README: https://developers.google.com/search/docs/data-types/article#non-amp
          '@context': 'http://schema.org',
          '@type': 'NewsArticle',
          //
          dateModified: '2019-01-01 00:00:00', // TODO: markdown にこれを入れたい。
          datePublished: '2019-01-01 00:00:00', // TODO:
          headline: description.substring(0, 110), // Note: 先頭110文字までのみ。それ以上だとエラーになる。
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          author: person,
          publisher: organization,
          mainEntityOfPage: blogURL, //TODO: このページのURL
          description,
        }
      : {};

    const schemaOrgJSONLD = [webSite, article, breadCrumbList];
    return {title, description, image, postURL, schemaOrgJSONLD};
  };

interface Props {
  postNode?: MarkdownRemark;
  isPost?: boolean;
  postEdges?: MarkdownRemarkEdge[];
}

export const SEOMeta = ({postNode, isPost}: Props): JSX.Element => {
  const {title, description, image, postURL, schemaOrgJSONLD} = fetchData({
    isPost,
    postNode,
  });

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
      <meta property="og:url" content={postURL} />
      {isPost ? <meta property="og:type" content="article" /> : null}
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
    </Helmet>
  );
};
