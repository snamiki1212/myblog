import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import {Follow} from 'react-twitter-widgets';
import styled from 'styled-components';
import UserLinks from '../UserLinks';

class UserInfo extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userLocation,
      userDescription,
      userLinks,
      userTwitter,
    } = this.props.config;
    const userLinksElement = <UserLinks config={this.props.config} />;
    if (!userAvatar && !userName && !userLocation && !userDescription) {
      if (userLinks) {
        return (
          <Wrapper className="md-grid md-cell md-cell--12 ">
            {userLinksElement}
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
          {userLinksElement}
        </CardText>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Card)`
  margin: 15px 0;
  font-size: 12px;
  font-family: 'FontAwesome', 'Font Awesome 5 Brands', 'Avenir',
    'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
    'ヒラギノ角ゴシック', 'YuGothic', 'Yu Gothic', 'メイリオ', 'Meiryo',
    'ＭＳ Ｐゴシック', 'MS PGothic';
  // font-family: $md-base-font-family; TODO:
`;

export default UserInfo;
