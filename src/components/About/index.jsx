import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

const {url} = config.userLinks.find(ele => ele.label === "Twitter")

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
              <p className="about-text md-body-2">
                また、このブログのコンテンツは全てgithubで管理されています。
                内容に問題や訂正すべき内容がある場合は
                <a href={url}>Twitter</a>
                か直接
                <a href={config.siteRepository}>このブログのリポジトリ</a>
                にPRを出してもらえれば対応します。
              </p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
