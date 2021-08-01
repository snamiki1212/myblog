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
  border: 1px solid ${(props) => props.theme.color.baseDark};
`;

const UnselectedLink = styled(BaseLink)`
  background: ${({theme}) => theme.color.baseLight};
  color: ${(props) => props.theme.color.baseDark};
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.color.baseLight};
    background: ${(props) => props.theme.color.baseDark};
    transform: scale(1.2);
  }
`;

const SelectedLink = styled(BaseLink)`
  color: ${({theme}) => theme.color.white};
  background: ${({theme}) => theme.color.baseDark};
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
