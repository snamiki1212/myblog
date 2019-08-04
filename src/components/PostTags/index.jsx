import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'gatsby';
import Chip from 'react-md/lib/Chips';
import styled from 'styled-components';

class PostTags extends Component {
  render() {
    const {tags} = this.props;
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
          tags.map(tag => (
            <Link
              key={tag}
              style={{textDecoration: 'none'}}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag label={tag} />
            </Link>
          ))}
      </Container>
    );
  }
}

export default PostTags;
