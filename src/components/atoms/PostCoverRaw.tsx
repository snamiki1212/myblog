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
  const post = postNode.frontmatter ? postNode.frontmatter : postNode;

  const coverNodeList = fileEdges.filter((fileNode): any => {
    if (fileNode.node.childImageSharp === null) {
      return false;
    }

    const existImage =
      fileNode.node.absolutePath.indexOf(
        path.join('/static/assets/', post.cover)
      ) !== -1;
    if (existImage) {
      return true;
    }

    return false;
  });

  if (coverNodeList.length === 1) {
    return (
      <Img
        fluid={coverNodeList[0].node.childImageSharp.fluid}
        outerWrapperClassName={coverClassName}
        style={{height: coverHeight, width: '100%'}}
      />
    );
  }

  /* eslint no-undef: "off" */
  const coverURL =
    post.cover.substring(0, 1) === '/'
      ? __PATH_PREFIX__ + post.cover
      : post.cover;

  return (
    <div
      style={{
        backgroundImage: `url(${coverURL})`,
        height: `${coverHeight}px`,
      }}
      className={coverClassName}
    />
  );
};
