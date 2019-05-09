import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import {Follow} from 'react-twitter-widgets';
import UserLinks from '../UserLinks';
import './UserInfo.scss';

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
          <Card className="md-grid md-cell md-cell--12 user-info">
            {userLinksElement}
          </Card>
        );
      }
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardText>
          <Avatar src={userAvatar} role="presentation" />
          <div>{userName && userName}</div>
          {userTwitter ? <Follow username={userTwitter} /> : 'Author'}
          <p>{userDescription && userDescription}</p>
          {userLinksElement}
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
