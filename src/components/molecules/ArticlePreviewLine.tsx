import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {MarkdownRemarkEdge} from '../../types';
import Image from '../atoms/Image';
import {UpdatedAt} from './';

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
      <Box>
        <BoxTitle>{edge.node.frontmatter.title}</BoxTitle>
        <UpdatedAt
          date={edge.node.fields._updatedAt}
          containerStyle={{fontSize: '0.7em'}}
        />
      </Box>
    </Link>
  );
};

const Box = styled.div`
  flex-direction: row;
  flex: 5;
  padding-left: ${PADDING_SIZE};
`;

const BoxTitle = styled.span`
  fontsize: 1em;
`;
