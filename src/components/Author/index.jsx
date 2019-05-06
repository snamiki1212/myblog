import React, {Component} from 'react';
import config from '../../../data/SiteConfig';
import './Author.scss';

class Author extends Component {
  render() {
    return (
      <div id="author">
        <img
          src={config.userAvatar}
          className="avator"
          alt={config.sidebarUserName}
        />
        <div className="name">{config.sidebarUserName}</div>
        <div className="discription">{config.userDescription}</div>
      </div>
    );
  }
}

export default Author;
