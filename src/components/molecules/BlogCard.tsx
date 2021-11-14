import React from 'react';
import styled from 'styled-components';
import {blogCardLogo} from '../../../data/SiteConfig';

const altImg =
  'https://user-images.githubusercontent.com/26793088/72956432-1193f080-3de3-11ea-844d-a39a6a4a18bb.png';

type Props = {url: string; title: string};

export const BlogCard: React.FC<Props> = ({
  // url,
  title,
}) => {
  /**
   * TODO: fetch してogp:image からサムネイルを表示しようかと思ったけど、local だとocpが表示できない？
   * とにかく、優先度的にそこまで高くないので、一端放置。
   * MEMO: https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
   */
  // console.log('__url', url);
  // fetch(url)
  //   .then(res => res.text())
  //   .then(text => {
  //     // console.log('__text', text);
  //     const el = new DOMParser().parseFromString(text, 'text/html');
  //     // console.log('__el', el);

  //     const headEls = el.head.children;

  //     const attr = Array.from(headEls).find(v => {
  //       const property = v.getAttribute('property');
  //       return property === 'og:image';
  //     });
  //     if (!attr) {
  //       console.warn('cannot find og:image');
  //       return false;
  //     }
  //     const imgSrc = attr.getAttribute('content');
  //     console.log('img src is ', imgSrc);
  //     return imgSrc;
  //   });
  /** ここまで */

  const imgUrl = blogCardLogo || altImg;

  return (
    <Wrapper>
      <Image src={imgUrl} alt="blog-card-logo" loading="lazy" />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  background: var(--white);
  filter: drop-shadow(1px 5px 5px lightgrey);
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    opacity: 1;
    filter: drop-shadow(1px 5px 15px lightgrey);
  }
`;

const Title = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
