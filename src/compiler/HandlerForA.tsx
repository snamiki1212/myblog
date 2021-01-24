import React from 'react';
import urljoin from 'url-join';
import styled from 'styled-components';

import {isInternalPageLink, isAffiLink} from '../lib/validator';
import {BlogCard} from '../components/molecules/BlogCard';
import {siteUrl} from '../../data/SiteConfig';

export const HandlerForA: React.FC = (props: any) => {
  // gatsby-remark-autolink-headers で生成されるページ内リンク
  const isGeneratedInternalHeadLinkByPlugin =
    props.className && props.className.includes('anchor');

  const shouldRenderOnlyTextAnchor =
    isGeneratedInternalHeadLinkByPlugin ||
    !isInternalPageLink(props.href) ||
    isAffiLink(props.href);

  if (shouldRenderOnlyTextAnchor) return <NormalA {...props} />;

  const fullUrl = urljoin(siteUrl, props.href);

  return (
    <NormalA {...props}>
      <BlogCard url={fullUrl} title={props.children[0]} />
    </NormalA>
  );
};

const NormalA = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.link};
  border-bottom: solid 1px;
`;

