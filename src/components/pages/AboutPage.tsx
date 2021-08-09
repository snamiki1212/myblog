import React from 'react';
import styled from 'styled-components';

import config from '../../../data/SiteConfig';
import {MyLinks} from '../atoms';
import {AuthorCard} from '../molecules/AuthorCard';
import {Button} from '../atoms/Button';
import {useConfigMySocialLinks} from '../../hooks/config';

export const AboutPage: React.FC = () => {
  return (
    <Wrapper>
      <CONTENT_Profile />
      <CONTENT_UntilNow />
      <CONTENT_WhatCan />
      <CONTENT_Projects />
      <CONTENT_AskWork />
      <CONTENT_ThisBlog />
    </Wrapper>
  );
};

const CONTENT_Profile = () => {
  return (
    <>
      <H2>プロフィール</H2>
      <AuthorCard disableMore={true} />
    </>
  );
};

const CONTENT_UntilNow = () => {
  return (
    <div>
      <H2>いままで</H2>
      <Card>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Box>
            ①大手SIerでSEとして上流工程の仕事を行う(2013~)
            <br />
          </Box>
          <span style={{marginLeft: '20px'}}>{`↓↓↓`}</span>
          <Box>
            ②ベンチャーでWeb系のプログラマーとして開発(2017~)
            <br />
          </Box>
          <span style={{marginLeft: '20px'}}>{`↓↓↓`}</span>
          <Box>
            ③独立してフリーランスに。(2019~now
            <br />
          </Box>
        </div>
      </Card>
    </div>
  );
};

const CONTENT_WhatCan = () => {
  const myLinkedinUrl = useConfigMySocialLinks('linkedin');
  return (
    <>
      <H2>出来ること</H2>
      <Card>
        <p>
          基本的にエンジニアとして、フロントとバックエンドの開発を中心に活動しています。
        </p>
        <div>
          ソフトスキル
          <ul>
            <li>チームリーダー</li>
            <li>対顧客折衝</li>
            <li>プロジェクト改善</li>
            <li>ディレクション</li>
          </ul>
        </div>
        <div>
          ハードスキル
          <ul>
            <li>React.js(Next.js/Gatsby.JS)</li>
            <li>ReactNative</li>
            <li>Ruby on Rails</li>
            <li>Elixir/Phoenix</li>
            <li>PHP/Laravel</li>
          </ul>
        </div>
        <p>詳細はLinkedInに記述していますので、こちらを参照願います。</p>
        <ExternalLink to={myLinkedinUrl} aria-label="lilnkedin-link">
          <Button>» LinkedIn(snamiki1212)</Button>
        </ExternalLink>
      </Card>
    </>
  );
};

const CONTENT_Projects = () => {
  return (
    <>
      <H2>作ったモノ</H2>
      <Card>
        <h3>Lunash (blog)</h3>
        <p>GatsbyJS / TypeScript / Netlify 周りの技術で作成してます。</p>
        <RAW_TweetForMyblog />
      </Card>
    </>
  );
};

const CONTENT_AskWork = () => {
  const myTwitterUrl = useConfigMySocialLinks('twitter');
  return (
    <>
      <H2>仕事の依頼</H2>
      <Card>
        <p>お仕事に関する依頼は、TwitterのDMにて受け付けています。</p>
        <ExternalLink to={myTwitterUrl} aria-label="twiter-link">
          <Button>» Twitter - Nash@Webエンジニア(@snamiki1212)</Button>
        </ExternalLink>
      </Card>
    </>
  );
};

const CONTENT_ThisBlog = () => {
  const myTwitterUrl = useConfigMySocialLinks('twitter');
  return (
    <>
      <H2>このブログについて</H2>
      <Card>
        <Text>
          このブログのコンテンツは全てgithubで管理されています。
          内容に問題や訂正すべき内容がある場合は
          <ExternalLink to={myTwitterUrl} aria-label="twitter-link">
            <Button>Twitter</Button>
          </ExternalLink>
          か直接
          <ExternalLink to={config.siteRepository} aria-label="blog-link">
            <Button>ブログのリポジトリ</Button>
          </ExternalLink>
          にPRを出してもらえれば対応します。
        </Text>
        <ExternalLink to={myTwitterUrl} aria-label="twitter-link">
          <Button>Twitter</Button>
        </ExternalLink>
        <ExternalLink to={config.siteRepository} aria-label="blog-link">
          <Button>ブログのリポジトリ</Button>
        </ExternalLink>

        <hr />
        <MyLinks />
      </Card>
    </>
  );
};

// NOTE: 無理くりTwitterWidgetをコンポーネントで表現してる
const RAW_TweetForMyblog: React.FC = () => (
  <div>
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        月で生活したいWebエンジニアが
        <br />
        <br />
        {'　「🌙Lunash 」'}
        <br />
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
      // charset="utf-8"
    ></script>
  </div>
);

const Wrapper = styled.div`
  padding: 30px;
  max-width: var(--content-width);
  margin: 0 auto;
`;

const Box = styled.div`
  border: 1px solid lightgray;
  padding: 20px;
  margin: 10px;
`;

const Text = styled.p`
  max-width: 640px;
  margin: 20px 0 !important;

  @media (max-width: 360px - 1px) {
    margin: 5px 0 !important;
  }
`;

const Card = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 2px 2px 10px lightgrey;
`;

const H2 = styled.h2`
  margin: 36px 0 4px 0;
`;

const ExternalLink: React.FC<{to: string; [key: string]: any}> = ({
  to,
  children,
  ...rest
}) => {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};
