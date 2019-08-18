import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'gatsby';
import moment from 'moment';
import Media, {MediaOverlay} from 'react-md/lib/Media'; // TODO:
import styled from 'styled-components';
import {PostCoverWrapper} from '../atoms';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

interface PostInfo {
  path: string;
  tags: string[];
  cover: string;
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
  const [isMobile, setIsMobile] = useState(false);
  const resize = () => setIsMobile(window.innerWidth >= 640 ? false : true);

  useEffect((): any => {
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const coverHeight = isMobile ? 162 : 162;

  return (
    <Card key={postInfo.path}>
      <Link to={postInfo.path}>
        <Media style={{height: coverHeight, paddingBottom: '0px'}}>
          <PostCoverWrapper postNode={postInfo} coverHeight={coverHeight} />
          <Overlay>
            <Title>{postInfo.title}</Title>
            {/* <CardTitle title={postInfo.title} style={{"color": "black"}} /> */}
          </Overlay>
        </Media>

        <CardContent>
          {`最終更新日: ${moment(postInfo.date).format(config.dateFormat)}`}
        </CardContent>
        <Excerpt>{postInfo.excerpt}</Excerpt>
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

const Overlay = styled(MediaOverlay)`
  display: flex;
  align-items: center;
  justify-content: center;

  // MEMO: background-color -> $md-media-overlay-color
  height: 100%;
  padding: 0 20px;
`;

const Title = styled.span`
  color: ${colors.fontWhite1};
  font-size: 24px;
  font-family: 'TsukuBRdGothic-Regular', 'Wawati SC', 'HanziPen TC',
    'HanziPen SC', 'Hannotate TC', 'MS UI Gothic', 'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ ProN W3', sans-serif;
  font-weight: 900;
  text-align: center;
`;
