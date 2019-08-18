import React from 'react';
import _ from 'lodash';
import {Link} from 'gatsby';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

export const TagList = (props): JSX.Element => {
  const {tags} = props;
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
`;