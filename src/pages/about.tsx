import React from 'react';
import Helmet from 'react-helmet';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Layout from '../components/organisms/Layout';
import {MyLinks} from '../components/atoms';
import config from '../../data/SiteConfig';
import styled from 'styled-components';

// selector
const myTwitterUrl = config.mySocials.find(ele => ele.icon === 'twitter').url;
const myLinkedinUrl = config.mySocials.find(ele => ele.icon === 'linkedin').url;

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>

      <Paper>
        <Card>
          <CardContent>
            {/* ------------------------------------ */}
            <h2>Nash プロフィール</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Avator src={config.userAvatar} alt={config.userName} />
              <Text>{config.userDescription}</Text>
            </div>
            {/* ------------------------------------ */}
            {/* <h2>経歴</h2> */}
            {/* ------------------------------------ */}
            <h2>出来ること</h2>
            <p>
              基本的にエンジニアとして、フロントとバックエンドの開発を中心に活動しています。
            </p>
            <p>
              ソフトスキル
              <ul>
                <li>チームリーダー</li>
                <li>プレイングリーダー</li>
                <li>対顧客折衝</li>
                <li>プロジェクト改善</li>
                <li>ディレクター</li>
              </ul>
            </p>
            <p>
              ハード
              <ul>
                <li>React.js(Next.js/Gatsby.JS)</li>
                <li>ReactNative</li>
                <li>Ruby on Rails</li>
                <li>Elixir/Phoenix</li>
                <li>Laravel/PHP</li>
              </ul>
            </p>
            <p>詳細はLinkedInに記述していますので、こちらを参照願います。</p>
            <CardActions>
              <Button>
                <a href={myLinkedinUrl}>» LinkedIn(snamiki1212)</a>
              </Button>
            </CardActions>
            {/* ------------------------------------ */}
            <h2>最近つくったモノ</h2>
            <h3># Lunash (このブログ)</h3>
            <p>GatsbyJS / TypeScript を中心に作成してあります。</p>
            <div>
              {/* Twitter */}
              <blockquote className="twitter-tweet">
                <p lang="ja" dir="ltr">
                  月で生活したいWebエンジニアが
                  <br />
                  <br />
                  　「🌙Lunash 」<br />
                  <br />
                  という、ブログを書いてます。
                  <br />
                  <br />
                  最終ゴールは、月でコード書く。
                  <a href="https://t.co/ymrYdnr1eT">https://t.co/ymrYdnr1eT</a>
                </p>
                &mdash; Lunash🌙月でコード書く (@Lunash1212){' '}
                <a href="https://twitter.com/Lunash1212/status/1114811667156594688?ref_src=twsrc%5Etfw">
                  April 7, 2019
                </a>
              </blockquote>{' '}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
            {/* ------------------------------------ */}
            <h2>お仕事の依頼</h2>
            <p>
              日々の情報発信は Twitter を中心に行っています。
              <br />
              お仕事に関する依頼も、TwitterのDMにて受け付けています。
            </p>
            <CardActions>
              <Button>
                <a href={myTwitterUrl}>» Nash@Webエンジニア(@snamiki1212)</a>
              </Button>
            </CardActions>
            {/* ------------------------------------ */}
            <h2>このブログ</h2>
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
    </Layout>
  );
};

const Avator = styled.img`
  border-radius: 10%;
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

export default AboutPage;
