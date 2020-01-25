import React from 'react';
import styled from 'styled-components';
import {blogCard} from '../../../data/SiteConfig';

const altImg =
  'https://user-images.githubusercontent.com/26793088/72956432-1193f080-3de3-11ea-844d-a39a6a4a18bb.png';

const BlogCard: React.FC<{url: string; title: string}> = ({url, title}) => {
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

  const imgUrl = blogCard || altImg;
  return (
    <Container>
      <img src={imgUrl} style={{width: '80px', height: '80px'}} />
      <span style={{marginLeft: '10px', marginRight: '10px'}}>{title}</span>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid lightgray;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
  background-color: white;
  &:hover {
    background-color: lightgray;
  }
`;

export default BlogCard;
