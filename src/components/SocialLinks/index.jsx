import React, {Component} from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';
import {HatenabookmarkButton} from 'react-social-sharebuttons';
import urljoin from 'url-join';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';

class SocialLinks extends Component {
  render() {
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

    const {postNode, postPath, mobile} = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : '');
    const renderShareCount = count => <ShareCount>{filter(count)}</ShareCount>;

    return (
      <Wrapper>
        <HatenabookmarkButton
          url={url}
          title={post.title}
          layout="standard-balloon"
        />
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>

        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>

        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => renderShareCount(count)}
          </GooglePlusShareCount>
        </GooglePlusShareButton>

        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>

        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => renderShareCount(count)}
          </LinkedinShareCount>
        </LinkedinShareButton>

        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </Wrapper>
    );
  }
}

export default SocialLinks;
