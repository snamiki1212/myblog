import React from 'react';
import {Link} from 'gatsby';
import {MarkdownRemarkEdge} from '../../types';
import Img from 'gatsby-image';
import {UpdatedAt} from '.';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

const PADDING_SIZE = '10px';
export const ArticlePreviewLine: React.FC<Props> = ({postInfo: edge}) => {
  return (
    <Link
      to={edge.node.fields._slug}
      key={edge.node.frontmatter.title}
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: PADDING_SIZE,
        paddingBottom: PADDING_SIZE,

        borderBottom: '1px lightgray solid',
      }}
    >
      <Img
        fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
        style={{flex: 3}}
      />
      <div
        style={{
          flexDirection: 'row',
          flex: 4,
          paddingLeft: PADDING_SIZE,
        }}
      >
        <span
          style={{
            fontSize: '1em',
          }}
        >
          {edge.node.frontmatter.title}
        </span>

        <UpdatedAt
          date={edge.node.fields._updatedAt}
          containerStyle={{fontSize: '0.7em'}}
        />
      </div>
    </Link>
  );
};
