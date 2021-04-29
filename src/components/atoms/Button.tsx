import React from 'react';
import styled from 'styled-components';

export const Button = styled.span`
  display: inline-block;
  border-radius: 10px;
  padding: 5px;
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.link};

  transition: 0.5s;
  & :hover {
    transition: 0.5s;
    background: ${(props) => props.theme.color.baseLight};
    cursor: pointer;
  }
`;
