import React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import {colors} from '../../../data/color';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Container>
      {tags.map((tag) => (
        <_Link key={tag} to={`/tags/${kebabCase(tag)}`}>
          <_Chip label={`#${tag}`} clickable color="primary" />
        </_Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
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
  background: linear-gradient(170deg, ${colors.vivid1}, ${colors.vivid2});
`;
