import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import UserLinks from '../UserLinks';
import config from '../../../data/SiteConfig';
import './About.scss';

const myTwitterUrl = config.userLinks.find(ele => ele.label === 'Twitter').url;
const myLinkedinUrl = config.userLinks.find(ele => ele.label === 'Linkedin')
  .url;

const About = () => (
  <div className="about-container md-grid mobile-fix">
    <Card className="md-grid md-cell--8">
      <div className="about-wrapper">
        <CardText>
          <h2>Nash プロフィール</h2>
          <img
            src={config.userAvatar}
            className="about-img"
            alt={config.userName}
          />
          <p className="about-text md-body-1">{config.userDescription}</p>
          <p>
            日々の情報発信は Twitter を中心に行っています。
            なにか連絡がある場合は Twitter DM にして頂けると幸いです。
            <br />
            <a href={myTwitterUrl}>» Nash@Webエンジニア(@snamiki1212)</a>
          </p>
          <h2>経歴</h2>
          <p>
            詳細はLinkedInに記述していますので、こちらを参照願います。
            <br />
            <a href={myLinkedinUrl}>» LinkedIn(snamiki1212)</a>
          </p>
          <h2>その他</h2>
          <p className="about-text md-body-2">
            このブログのコンテンツは全てgithubで管理されています。
            内容に問題や訂正すべき内容がある場合は
            <a href={myTwitterUrl}>Twitter</a>
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

export default About;
