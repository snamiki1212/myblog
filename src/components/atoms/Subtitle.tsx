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
  color: var(--base-light);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: linear-gradient(
    145deg,
    var(--base-dark),
    var(--base-dark-CC),
    var(--base-dark)
  );
  margin-top: 20px;
`;
