import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {MarkdownRemark} from '../../templates/post';
import {XIcon} from '../atoms';

export const PostSuggestions = ({
  postNode,
}: {
  postNode: MarkdownRemark;
}): JSX.Element => {
  const postFields = postNode.fields;

  return (
    <Container className="md-grid md-cell--12">
      <StyledLink
        to={postFields.prevSlug}
        className="md-grid md-cell md-cell--6"
      >
        <XIcon icon="awrrow-left" />
        <span style={{flex: 3}} className="md-headline ">
          {postFields.prevTitle}
        </span>
      </StyledLink>

      <StyledLink
        to={postFields.nextSlug}
        className="md-grid md-cell md-cell--6"
      >
        <span style={{flex: 3}} className="md-headline ">
          {postFields.nextTitle}
        </span>
        <XIcon icon="awrrow-right" />
      </StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.backgroundWhite2};
`;
