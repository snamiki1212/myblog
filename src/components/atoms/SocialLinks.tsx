import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  LineShareButton,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
  LineIcon,
} from 'react-share';
import {HatenaShareButton} from './';
import urljoin from 'url-join';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {MarkdownRemark} from '../../templates/post';

export const SocialLinks = (props: {postNode: MarkdownRemark}): JSX.Element => {
  const {postNode} = props;

  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, postNode.frontmatter.slug);
  const iconSize = 36;
  const renderShareCount = (count: number): JSX.Element => (
    <ShareCount>{count > 0 ? count : ''}</ShareCount>
  );

  return (
    <Wrapper>
      <HatenaShareButton url={url} size={iconSize} />
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>
          {(count: number): JSX.Element => renderShareCount(count)}
        </RedditShareCount>
      </RedditShareButton>

      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>

      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {(count: number): JSX.Element => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>

      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>

      <LineShareButton url={url} title={post.title}>
        <LineIcon round size={iconSize} />
      </LineShareButton>
    </Wrapper>
  );
};

const ShareCount = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 15px 0;
`;
