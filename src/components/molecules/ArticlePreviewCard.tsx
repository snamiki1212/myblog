import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import {MarkdownRemarkEdge} from '../../types';
import {UpdatedAt} from '.';
import Image from '../atoms/Image';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

export const ArticlePreviewCard: React.FC<Props> = ({postInfo}) => {
  return (
    <_Card key={postInfo.node.frontmatter.title}>
      <_CardAction>
        <Link to={postInfo.node.fields._slug}>
          <_CardMedia>
            <Image
              imgInfo={postInfo.node.frontmatter.cover}
              style={{maxHeight: '100px'}}
            />
          </_CardMedia>

          <CardContent>
            <ContentDate>
              <UpdatedAt
                date={postInfo.node.fields._updatedAt}
                containerStyle={{justifyContent: 'flex-end'}}
              />
            </ContentDate>
            <ContenTitle>{postInfo.node.frontmatter.title}</ContenTitle>

            <ContentExcerpt>{postInfo.node.excerpt}</ContentExcerpt>
          </CardContent>
        </Link>
      </_CardAction>
    </_Card>
  );
};

const _Card = styled(Card)`
  margin: 10px;
  width: 45%;
`;

const _CardAction = styled(CardActionArea)`
  height: 300px;
`;

const _CardMedia = styled(CardMedia)`
  text-align: center;
`;

const ContenTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
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
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 1)
    );
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
