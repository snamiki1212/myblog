import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./Author.scss";

class Author extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div id='author'>
        <img
          src={config.userAvatar}
          className="avator"
          alt={config.userName}
        />
        <div className='name'>{config.userName}</div>
        <div className='discription'>{config.userDescription}</div>
      </div>
    );
  }
}

export default Author;
