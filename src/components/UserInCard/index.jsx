import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import moment from "moment";
import "./UserInCard.scss";

class UserInCard extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userIntroduction,
    } = this.props.config;
    const { postNode, config } = this.props;

    return (
      <CardTitle title="" subtitle="" className="user-in-card">
        <img
          src={userAvatar} 
          className="inner-avator"
          alt="user"
        />
        <div className="inner-detail">
          <span className="name">{userName}</span>
          <p className="desc">{userIntroduction} <br /></p>
          <p className="desc">
            {`Published on ${moment(postNode.fields.date).format(
              config.dateFormat
            )}`} ( {`${postNode.timeToRead} min read`} )
          </p>
        </div>
      </CardTitle>
    )
  }
}

export default UserInCard;
