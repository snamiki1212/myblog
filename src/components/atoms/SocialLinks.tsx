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
import {MarkdownRemark} from '../templates/PostTemplate';

type Props = {postNode: MarkdownRemark};

const MaybeShareCount = ({count}: {count: number}) => (
  <ShareCount>{count > 0 ? count : ''}</ShareCount>
);

export const SocialLinks: React.FC<Props> = props => {
  const {postNode} = props;

  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, postNode.frontmatter.slug);
  const iconSize = 36;

  return (
    <Container>
      <InnerContainer>
        <HatenaShareButton url={url} size={iconSize} />
      </InnerContainer>

      <InnerContainer>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {(count: number) => <MaybeShareCount count={count} />}
          </RedditShareCount>
        </RedditShareButton>
      </InnerContainer>

      <InnerContainer>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </InnerContainer>

      <InnerContainer>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {(count: number) => <MaybeShareCount count={count} />}
          </FacebookShareCount>
        </FacebookShareButton>
      </InnerContainer>

      <InnerContainer>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
      </InnerContainer>

      <InnerContainer>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </InnerContainer>

      <InnerContainer>
        <LineShareButton url={url} title={post.title}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </InnerContainer>
    </Container>
  );
};

const InnerContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const ShareCount = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 15px 0;
`;
