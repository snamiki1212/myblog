import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {PaginationContext} from '../../../gatsby-node/types';

type Props = {
  context: PaginationContext;
};

export const Paginator: React.FC<Props> = ({context}) => {
  const {currentPage, lastPage} = context;

  return (
    <Wrapper>
      {Array.from({length: lastPage}, (_, i) => {
        const pageNo = i + 1;
        const key = `pagination-number-${pageNo}`;
        const slug = `/${i === 0 ? '' : pageNo}`;
        const selected = pageNo === currentPage;

        const Component = selected ? SelectedLink : UnselectedLink;

        return (
          <Component key={key} to={slug}>
            {pageNo}
          </Component>
        );
      })}
    </Wrapper>
  );
};

const BaseLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--base-dark);
`;

const UnselectedLink = styled(BaseLink)`
  color: var(--base-dark);
  background: var(--base-light);

  transition: 0.3s;
  &:hover {
    color: var(--base-light);
    background: var(--base-dark);
    transform: scale(1.2);
  }
`;

const SelectedLink = styled(BaseLink)`
  color: var(--white);
  background: var(--base-dark);
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  list-style: none;
  padding-bottom: 100px;
  margin: 30px auto;
  gap: 10px;
`;
