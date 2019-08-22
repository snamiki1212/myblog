import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Link} from 'gatsby';
import moment from 'moment';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {XIcon} from '../atoms';
import {MarkdownRemarkEdge} from '../../templates';

export const PostPreviewCard = ({
  postInfo,
}: {
  postInfo: MarkdownRemarkEdge;
}): JSX.Element => {
  return (
    <Card
      key={postInfo.node.fields._slug}
      style={{maxWidth: '300px', margin: '15px'}}
    >
      <Link to={postInfo.node.fields._slug}>
        <CardMedia
          // TODO: 画像が div の background に変換される。amp-img 使えないので、オレオレで作らないと行けない。https://stackoverflow.com/questions/45760791/can-we-use-images-in-css-background-in-google-amp
          image={postInfo.node.frontmatter.cover.publicURL}
          style={{height: '100px', width: '100%'}}
        />

        <CardContent>
          <ContentDate>
            <XIcon icon="sync" />
            {moment(postInfo.node.frontmatter.date).format(config.dateFormat)}
          </ContentDate>
          <ContenTitle>{postInfo.node.frontmatter.title}</ContenTitle>

          <ContentExcerpt>{postInfo.node.frontmatter.title}</ContentExcerpt>
        </CardContent>
      </Link>
    </Card>
  );
};

const ContenTitle = styled.div`
  font-weight: bold;
`;

const ContentDate = styled.div`
  text-align: right;
  font-size: 12px;
  margin-bottom: 8px;
`;

const ContentExcerpt = styled(CardContent)`
  font-size: 12px;

  position: relative;
  &::after {
    content: '';
    display: block;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 1)
    );
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
