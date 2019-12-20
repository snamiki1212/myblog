import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext} from '../../../gatsby-node_';

type Props = {
  context: PaginationContext;
};
export const Paginator: React.FC<Props> = ({context}) => {
  const {currentPage, lastPage} = context;

  return (
    <Container>
      {Array.from(
        {length: lastPage},
        (_, i): JSX.Element => (
          <StyledLink
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? '' : i + 1}`}
            style={{
              color: i + 1 === currentPage ? colors.fontWhite1 : '',
              background: i + 1 === currentPage ? colors.backgroundBlack1 : '',
            }}
          >
            {i + 1}
          </StyledLink>
        )
      )}
    </Container>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  background: ${colors.backgroundWhite2};
  padding: 15px;
  transition: 0.3s;
  &:hover {
    background: ${colors.backgroundVivid1};
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  list-style: none;
  padding-bottom: 100px;
  margin: 30px auto;
`;
