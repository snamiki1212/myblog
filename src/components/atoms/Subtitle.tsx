import React from 'react';
import styled from 'styled-components';

export const Subtitle: React.FC = ({children}) => {
  return (
    <Wrapper>
      <Text>🌙 {children}</Text>
    </Wrapper>
  );
};

const Text = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.color.baseLight};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${(props) => props.theme.color.baseDark};
  margin-top: 20px;
`;
