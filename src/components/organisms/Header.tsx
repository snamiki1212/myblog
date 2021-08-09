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
        <SearchBox searchEngineId={searchEngineId} />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.color.baseDark},
    ${(props) => `${props.theme.color.baseDark}CC`},
    ${(props) => props.theme.color.baseDark}
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
