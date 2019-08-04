import React, {Component} from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {colors} from '../../../data/color';

export default class PostSuggestions extends Component {
  render() {
    const {postNode} = this.props;
    const postFields = postNode.fields;

    return (
      <Container className="md-grid md-cell--12">
        <StyledLink
          to={postFields.prevSlug}
          className="md-grid md-cell md-cell--6"
        >
          <FontIcon forceFontSize forceSize={64} style={{flex: 1}}>
            arrow_back
          </FontIcon>
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
          <FontIcon style={{flex: 1}} forceFontSize forceSize={64}>
            arrow_forward
          </FontIcon>
        </StyledLink>
      </Container>
    );
  }
}
const Container = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors['bg-white-2']};
`;
