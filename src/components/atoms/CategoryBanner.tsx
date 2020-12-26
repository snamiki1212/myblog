import React from 'react';
import {colors} from '../../../data/color';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 30px;
`;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.grayLight};
  color: ${colors.black1};
`;

export const CategoryBanner: React.FC<{categoryName: string}> = ({
  categoryName,
}) => {
  return (
    <Wrapper>
      <Text>🚀{categoryName}</Text>
    </Wrapper>
  );
};
