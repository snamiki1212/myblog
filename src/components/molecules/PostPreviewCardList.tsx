import React from 'react';
import {PostPreviewCard} from '.';

export const PostPreviewCardList = (props): JSX.Element => {
  const postList = props.postEdges.map((postEdge: any): any => {
    return {
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    };
  });

  return (
    <div className="md-grid md-grid--no-spacing md-cell--middle">
      <div className="md-grid md-cell--10">
        {postList.map(
          (post: any): JSX.Element => (
            <PostPreviewCard key={post.title} postInfo={post} />
          )
        )}
      </div>
    </div>
  );
};
