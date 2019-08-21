import React from 'react';
import Img from 'gatsby-image';
import path from 'path';

interface Props {
  fileEdges: any;
  postNode: any;
  coverHeight: number;
  coverClassName?: string;
}

// TODO: ロジックをリファクタリングしたい
export const PostCoverRaw = ({
  fileEdges,
  postNode,
  coverHeight,
  coverClassName,
}: Props): JSX.Element => {
  console.log('[Cover]postNode', postNode);

  return (
    <Img
      fluid={{...postNode.frontmatter.cover.childImageSharp.fluid}}
      outerWrapperClassName={coverClassName}
      style={{height: coverHeight, width: '100%'}}
    />
  );
};
