import React from 'react';
import _ from 'lodash';
import {Link} from 'gatsby';
import Chip from 'react-md/lib/Chips';
import styled from 'styled-components';

const PostTags = (props): JSX.Element => {
  const {tags} = props;
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  `;

  const Tag = styled(Chip)`
    margin: 5px 2px 0;
  `;
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
              <Tag label={tag} />
            </Link>
          )
        )}
    </Container>
  );
};

export default PostTags;
