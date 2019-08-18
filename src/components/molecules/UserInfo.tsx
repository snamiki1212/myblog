import React from 'react';
import {Link} from 'gatsby';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {Follow} from 'react-twitter-widgets';
import styled from 'styled-components';
import {MyLinks} from '../atoms';

export const UserInfo = (props): JSX.Element => {
  const {
    userAvatar,
    userName,
    userLocation,
    userDescription,
    mySocials,
    userTwitter,
  } = props.config;

  if (!userAvatar && !userName && !userLocation && !userDescription) {
    if (mySocials) {
      return (
        <Wrapper className="md-grid md-cell md-cell--12 ">
          <MyLinks />
        </Wrapper>
      );
    }
    return null;
  }

  return (
    <Wrapper>
      <CardHeader
        avatar={
          <Link to="/about">
            <Avatar src={userAvatar} alt={userName || 'me'} />
          </Link>
        }
        title={userName}
      />
      <CardContent>
        {userTwitter ? <Follow username={userTwitter} /> : 'Author'}
        <p>{userDescription && userDescription}</p>
        <MyLinks />
      </CardContent>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  margin: 15px 0;
  font-size: 12px;
  font-family: 'FontAwesome', 'Font Awesome 5 Brands', 'Avenir',
    'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
    'ヒラギノ角ゴシック', 'YuGothic', 'Yu Gothic', 'メイリオ', 'Meiryo',
    'ＭＳ Ｐゴシック', 'MS PGothic';
  // font-family: $md-base-font-family; TODO:
`;