import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {Link} from 'gatsby';

type Props = {name: string; count?: number; path: string};

export const DarkTip: React.FC<Props> = ({name, count, path}) => {
  let text = name;
  if (count != undefined) text = text + ` (${count})`;

  return (
    <_Link to={path}>
      <_Button>{`#${text}`}</_Button>
    </_Link>
  );
};

const _Link = styled(Link)`
  text-decoration: none;
`;

const _Button = styled(Button)`
  margin: 5px 2px 0;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.baseDark};
  transition: 0.3s;
  opacity: 0.9;
  letter-spacing: 1px;
  & :hover {
    transition: 0.3s;
    opacity: 1;
    letter-spacing: 4px;
    background: ${(props) => props.theme.color.baseDark};
  }
`;
