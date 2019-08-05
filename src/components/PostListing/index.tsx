import React from 'react';
import PostPreview from '../PostPreview';

const PostListing = (props): JSX.Element => {
  const getPostList = (): any => {
    const postList = [];

    props.postEdges.forEach((postEdge: any) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <div className="md-grid md-grid--no-spacing md-cell--middle">
      <div className="md-grid md-cell--10">
        {postList.map((post: JSX.Element) => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListing;
