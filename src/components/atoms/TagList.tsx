import React from 'react';
import _ from 'lodash';
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
          (tag): JSX.Element => (
            <Link
              key={tag}
              style={{textDecoration: 'none'}}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <SChip label={tag} clickable />
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
  background: linear-gradient(to left, ${colors.vivid1}, ${colors.vivid2});
`;
