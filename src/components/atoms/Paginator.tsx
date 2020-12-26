import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {colors} from '../../../data/color';
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

        return (
          <_Link selected={selected} key={key} to={slug}>
            {pageNo}
          </_Link>
        );
      })}
    </Wrapper>
  );
};

const _Link = styled(Link)<{selected: boolean}>`
  text-decoration: none;
  padding: 15px;
  transition: 0.3s;
  border-radius: 50%;
  &:hover {
    background: ${colors.vivid2};
  }
  color: ${({selected}) => selected && colors.white1};
  background: ${({selected}) => (selected ? colors.black1 : colors.grayLight)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  list-style: none;
  padding-bottom: 100px;
  margin: 30px auto;
`;
