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
import {HatenaShareButton} from '../atoms';
import urljoin from 'url-join';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {MarkdownRemark} from '../pages/PostPage';

type Props = {postNode: MarkdownRemark};

const MaybeShareCount = ({count}: {count: number}) => (
  <ShareCount>{count > 0 ? count : ''}</ShareCount>
);

export const SocialLinks: React.FC<Props> = (props) => {
  const {postNode} = props;

  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, postNode.frontmatter.slug);
  const iconSize = 36;

  return (
    <Wrapper>
      <InnerWrapper>
        <HatenaShareButton url={url} size={iconSize} />
      </InnerWrapper>

      <InnerWrapper>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {(count: number) => <MaybeShareCount count={count} />}
          </RedditShareCount>
        </RedditShareButton>
      </InnerWrapper>

      <InnerWrapper>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </InnerWrapper>

      <InnerWrapper>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {(count: number) => <MaybeShareCount count={count} />}
          </FacebookShareCount>
        </FacebookShareButton>
      </InnerWrapper>

      <InnerWrapper>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
      </InnerWrapper>

      <InnerWrapper>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </InnerWrapper>

      <InnerWrapper>
        <LineShareButton url={url} title={post.title}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </InnerWrapper>
    </Wrapper>
  );
};

const InnerWrapper = styled.span`
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    opacity: 1;
    transform: scale(1.5);
  }
`;

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
  gap: 10px;
`;
