import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {MarkdownRemarkEdge} from '../../types';
import Image from '../atoms/Image';
import {Logo} from '../atoms/Logo';
import {UpdatedAt} from '../molecules';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

const PADDING_SIZE = '10px';

export const ArticlePreviewLine: React.FC<Props> = ({postInfo: edge}) => {
  const to = edge.node.fields._slug;
  const linkKey = edge.node.frontmatter.title;
  const imgInfo = edge.node.frontmatter.cover;
  const title = edge.node.frontmatter.title;
  const updatedAt = edge.node.fields._updatedAt;
  const category = edge.node.frontmatter.category;

  return (
    <Link to={to} key={linkKey}>
      <Line>
        <BoxImage>
          <_Image imgInfo={imgInfo} />
        </BoxImage>

        <BoxDescription>
          <Logo size={30} />
          <Title>{title}</Title>
          <UpdatedAt date={updatedAt} containerStyle={{fontSize: '0.7em'}} />
          <CategoryName>{category}</CategoryName>
        </BoxDescription>
      </Line>
    </Link>
  );
};

const BoxImage = styled.div``;

const _Image = styled(Image)`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const Line = styled.div`
  display: flex;
  padding: ${PADDING_SIZE};
  border-bottom: 1px lightgray solid;
`;

const BoxDescription = styled.div`
  flex-direction: row;
  padding-left: ${PADDING_SIZE};
`;

const Title = styled.span`
  fontsize: 1em;
`;

const CategoryName = styled.span`
  border-radius: 10px;
  background: ${(props) => props.theme.color.primaryVivid};
  color: ${(props) => props.theme.color.baseDark};
  font-family: ${(props) => props.theme.fontFamily.primary};
  padding: 5px 20px;
`;
