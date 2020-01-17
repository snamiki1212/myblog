import React from 'react';
import {Link} from 'gatsby';
import {MarkdownRemarkEdge} from '../../types';
import Image from '../atoms/Image';
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
        padding: PADDING_SIZE,
        borderBottom: '1px lightgray solid',
      }}
    >
      <Image
        imgInfo={edge.node.frontmatter.cover}
        style={{
          flex: 3,
          height: '100px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          flexDirection: 'row',
          flex: 5,
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
