import React from 'react';
import urljoin from 'url-join';
import styled from 'styled-components';

import {isInternalPageLink, isAffiLink} from '../../../lib/validator';
import {BlogCard} from '../../../components/molecules/BlogCard';
import {siteUrl} from '../../../../data/SiteConfig';

export const NaiveAnchor: React.FC = (props: any) => {
  // gatsby-remark-autolink-headers で生成されるページ内リンク
  const isGeneratedInternalHeadLinkByPlugin =
    props.className && props.className.includes('anchor');

  const shouldRenderOnlyTextAnchor =
    isGeneratedInternalHeadLinkByPlugin ||
    !isInternalPageLink(props.href) ||
    isAffiLink(props.href);

  if (shouldRenderOnlyTextAnchor) return <StyledA {...props} />;

  const fullUrl = urljoin(siteUrl, props.href);

  return (
    <StyledA {...props}>
      <BlogCard url={fullUrl} title={props.children[0]} />
    </StyledA>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.link};
  &:hover {
    border-bottom: solid 1px;
  }
`;
