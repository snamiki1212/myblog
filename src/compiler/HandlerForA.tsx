import React from 'react';
import {isInternalPageLink, isAffiLink} from '../lib/validator';
import BlogCard from '../components/atoms/BlogCard';
import urljoin from 'url-join';
import styled from 'styled-components';
import {colors} from '../../data/color';
import {siteUrl} from '../../data/SiteConfig';

const NormalA = styled.a`
  text-decoration: none;
  border-bottom: solid 1px;
  transition: 0.5s;
  &:hover {
    color: ${colors.grayDark};
    transition: 0.3s;
  }
`;

const HandlerForA: React.FC = (props: any) => {
  if (
    (props.className && props.className.includes('anchor')) || // gatsby-remark-autolink-headers で生成されるページ内リンク
    !isInternalPageLink(props.href) ||
    isAffiLink(props.href)
  ) {
    return <NormalA {...props} />;
  }

  const fullUrl = urljoin(siteUrl, props.href);
  return (
    <NormalA {...props}>
      <BlogCard url={fullUrl} title={props.children[0]} />
    </NormalA>
  );
};

export default HandlerForA;
