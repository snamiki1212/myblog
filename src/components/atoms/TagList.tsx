import React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Wrapper>
      {tags.map((tag) => (
        <_Link key={tag} to={`/tags/${kebabCase(tag)}`}>
          <_Chip label={`#${tag}`} clickable color="primary" />
        </_Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const _Link = styled(Link)`
  text-decoration: none;
`;

const _Chip = styled(Chip)`
  margin: 5px 2px 0;
  color: ${props => props.theme.color.baseLight};
  background: ${props => props.theme.color.primaryVivid};
`;
