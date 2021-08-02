import React from 'react';
import styled from 'styled-components';

export const Subtitle: React.FC = ({children}) => {
  return (
    <Wrapper>
      <Text>#{children}</Text>
    </Wrapper>
  );
};

const Text = styled.div`
  font-size: 30px;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.baseLight};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.color.baseDark},
    ${(props) => props.theme.color.baseDark}CC,
    ${(props) => props.theme.color.baseDark}
  );
  margin-top: 20px;
`;
