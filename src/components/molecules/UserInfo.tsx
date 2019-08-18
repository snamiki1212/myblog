import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
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
    <Wrapper className="md-grid md-cell md-cell--12 ">
      <CardText>
        <Avatar src={userAvatar} role="presentation" />
        <div>{userName && userName}</div>
        {userTwitter ? <Follow username={userTwitter} /> : 'Author'}
        <p>{userDescription && userDescription}</p>
        <MyLinks />
      </CardText>
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
