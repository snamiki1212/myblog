import React from 'react';
import Img from 'gatsby-image';

interface Props {
  postNode: any;
  coverHeight: number;
}

// TODO: ロジックをリファクタリングしたい
export const PostCoverRaw = ({postNode, coverHeight}: Props): JSX.Element => {
  return (
    <Img
      fluid={{
        ...postNode.frontmatter.cover.childImageSharp.fluid,
      }}
      style={{height: coverHeight, width: '100%'}}
    />
  );
};
