import React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Link} from 'gatsby';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import {colors} from '../../../data/color';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  return (
    <Container>
      {tags &&
        tags.map(
          (tag): React.ReactNode => (
            <Link
              key={tag}
              style={{textDecoration: 'none'}}
              to={`/tags/${kebabCase(tag)}`}
            >
              <SChip label={`#${tag}`} clickable color="primary" />
            </Link>
          )
        )}
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

const SChip = styled(Chip)`
  margin: 5px 2px 0;
  background: linear-gradient(170deg, ${colors.vivid1}, ${colors.vivid2});
`;
