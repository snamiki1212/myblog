import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import styled from 'styled-components';
import UserLinks from '../UserLinks';
import config from '../../../data/SiteConfig';

const myTwitterUrl = config.userLinks.find(ele => ele.label === 'Twitter').url;
const myLinkedinUrl = config.userLinks.find(ele => ele.label === 'Linkedin')
  .url;

const About = () => (
  <div className="about-container md-grid">
    <Card className="md-grid md-cell--8">
      <div className="about-wrapper">
        <CardText>
          <h2>Nash プロフィール</h2>
          <Img src={config.userAvatar} alt={config.userName} />
          <Text className="md-body-1">{config.userDescription}</Text>
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
          <Text className="md-body-2">
            このブログのコンテンツは全てgithubで管理されています。
            内容に問題や訂正すべき内容がある場合は
            <a href={myTwitterUrl}>Twitter</a>
            か直接
            <a href={config.siteRepository}>このブログのリポジトリ</a>
            にPRを出してもらえれば対応します。
          </Text>
        </CardText>
        <UserLinks labeled config={config} />
      </div>
    </Card>
  </div>
);

const Img = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px 0;

  @media (max-width: 360px - 1px) {
    padding: 20px;
  }
`;

const Text = styled.p`
  max-width: 640px;
  margin: 20px 0 !important;

  @media (max-width: 360px - 1px) {
    margin: 5px 0 !important;
  }
`;

export default About;
