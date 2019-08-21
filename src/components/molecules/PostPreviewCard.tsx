import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Link} from 'gatsby';
import moment from 'moment';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';

interface PostInfo {
  path: string;
  tags: string[];
  cover: {
    publicURL: string;
    childImageSharp: {
      fluid: {
        base64: string;
      };
    };
  };
  title: string;
  date: Date;
  excerpt: string;
  timeToRead: number;
}

export const PostPreviewCard = ({
  postInfo,
}: {
  postInfo: PostInfo;
}): JSX.Element => {
  return (
    <Card key={postInfo.path} style={{maxWidth: '300px', margin: '15px'}}>
      <Link to={postInfo.path}>
        <CardMedia
          // TODO: 画像が div の background に変換される。amp-img 使えないので、オレオレで作らないと行けない。https://stackoverflow.com/questions/45760791/can-we-use-images-in-css-background-in-google-amp
          image={postInfo.cover.publicURL}
          style={{height: '100px', width: '100%'}}
        />
        <CardContent>
          <div style={{padding: '20px'}}>{postInfo.title}</div>
          <div style={{paddingLeft: '20px'}}>
            {`最終更新日: ${moment(postInfo.date).format(config.dateFormat)}`}
          </div>
          <Excerpt>{postInfo.excerpt}</Excerpt>
        </CardContent>
      </Link>
    </Card>
  );
};

const Excerpt = styled(CardContent)`
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
