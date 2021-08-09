import React from 'react';
import styled from 'styled-components';

export const Button = styled.span`
  display: inline-block;
  border-radius: 10px;
  padding: 5px;
  background: var(--white);
  color: var(--vivid2);

  transition: 0.5s;
  & :hover {
    transition: 0.5s;
    background: var(--base-light);
    cursor: pointer;
  }
`;
