import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {IndexPageContext} from '../../../gatsbyjs/createPages';

export const Paginator = (props: any): JSX.Element => {
  const {currentPage, numPages} = props.pageContext as IndexPageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <PaginatorList>
      {!isFirst && (
        <StyledLink to={prevPage} rel="prev">
          ← Previous Page
        </StyledLink>
      )}
      {Array.from(
        {length: numPages},
        (_, i): JSX.Element => (
          <StyledLink
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? '' : i + 1}`}
            style={{
              textDecoration: 'none',
              color: i + 1 === currentPage ? '#ffffff' : '',
              background: i + 1 === currentPage ? '#007acc' : '',
            }}
          >
            {i + 1}
          </StyledLink>
        )
      )}
      {!isLast && (
        <StyledLink to={nextPage} rel="next">
          Next Page →
        </StyledLink>
      )}
    </PaginatorList>
  );
};

const StyledLink = styled(Link)`
  background: ${colors['bg-white-2']};
  padding: 15px;
  transition: 0.3s;
  &:hover {
    background: ${colors['bg-vivid-1']};
  }
`;

const PaginatorList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  list-style: none;
  padding-bottom: 100px;
  margin: 30px auto;
`;
