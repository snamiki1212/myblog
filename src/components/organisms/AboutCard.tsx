import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {MyLinks} from '../atoms/';
import config from '../../../data/SiteConfig';

// selector
const myTwitterUrl = config.mySocials.find(ele => ele.icon === 'twitter').url;
const myLinkedinUrl = config.mySocials.find(ele => ele.icon === 'linkedin').url;

export const AboutCard = (): JSX.Element => (
  <div>
    <Paper>
      <Card>
        <CardContent>
          <h2>Nash プロフィール</h2>
          <Img src={config.userAvatar} alt={config.userName} />
          <Text>{config.userDescription}</Text>

          {/* ------------------------------------ */}
          <h2>最近つくったモノ</h2>
          <h3># Lunash (このブログ)</h3>
          <p>GatsbyJS / TypeScript を中心に作成してあります。</p>

          {/* ------------------------------------ */}
          <h2>日々の活動</h2>
          <p>
            日々の情報発信は Twitter を中心に行っています。
            なにか連絡がある場合は Twitter DM にして頂けると幸いです。
            <br />
          </p>
          <CardActions>
            <Button>
              <a href={myTwitterUrl}>» Nash@Webエンジニア(@snamiki1212)</a>
            </Button>
          </CardActions>

          {/* ------------------------------------ */}
          <h2>いままでの経歴</h2>
          {/* TODO: ここにSEとWebとフリーランスを書く */}
          <p>詳細はLinkedInに記述していますので、こちらを参照願います。</p>
          <CardActions>
            <Button>
              <a href={myLinkedinUrl}>» LinkedIn(snamiki1212)</a>
            </Button>
          </CardActions>

          {/* ------------------------------------ */}
          <h2>その他</h2>
          <Text>
            このブログのコンテンツは全てgithubで管理されています。
            内容に問題や訂正すべき内容がある場合は
            <a href={myTwitterUrl}>Twitter</a>
            か直接
            <a href={config.siteRepository}>ブログのリポジトリ</a>
            にPRを出してもらえれば対応します。
          </Text>
          <CardActions>
            <Button>
              <a href={myTwitterUrl}>Twitter</a>
            </Button>
            <Button>
              <a href={config.siteRepository}>ブログのリポジトリ</a>
            </Button>
          </CardActions>

          <MyLinks />
        </CardContent>
      </Card>
    </Paper>
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

export default AboutCard;
