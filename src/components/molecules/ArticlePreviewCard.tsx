import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {MarkdownRemarkEdge} from '../../types';
import Img from 'gatsby-image';
import {UpdatedAt} from '.';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

export const ArticlePreviewCard: React.FC<Props> = ({postInfo}) => {
  return (
    <StyledCard key={postInfo.node.frontmatter.title}>
      <StyledCardActionArea>
        <Link to={postInfo.node.fields._slug}>
          <CardMedia>
            <Img
              fluid={postInfo.node.frontmatter.cover.childImageSharp.fluid}
              style={{maxHeight: '100px'}}
            />
          </CardMedia>

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
      </StyledCardActionArea>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 10px;
  width: 45%;
`;

const StyledCardActionArea = styled(CardActionArea)`
  height: 300px;
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
