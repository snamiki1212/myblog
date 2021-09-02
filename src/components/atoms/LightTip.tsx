import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {Link} from 'gatsby';

type Props = {name: string; count?: number; path: string};

export const LightTip: React.FC<Props> = ({name, path, count}) => {
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
  color: var(--base-dark);
  background: var(--base-light);
  transition: 0.3s;
  opacity: 0.9;
  letter-spacing: 1px;
  & :hover {
    transition: 0.3s;
    opacity: 1;
    letter-spacing: 4px;
  }
`;
