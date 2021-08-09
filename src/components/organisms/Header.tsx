import React from 'react';
import styled from 'styled-components';
import {HeadNav} from '../molecules/HeadNav';
import {SearchBox} from '../atoms/SearchBox';

const searchEngineId = 'TODO_REPLACE_ME process.env.customSearchEngineId';
export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <HeadNav />
        <RenderOnlyPC>
          <SearchBox searchEngineId={searchEngineId} />
        </RenderOnlyPC>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(
    145deg,
    var(--base-dark),
    var(--base-dark-CC),
    var(--base-dark)
  );
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RenderOnlyPC = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
