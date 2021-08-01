import React from 'react';
import styled from 'styled-components';
import kebabCase from 'lodash.kebabcase';
import {Button} from './Button';
import {Link} from 'gatsby';

type Props = {tag: string; number?: number};

export const Tag: React.FC<Props> = ({tag, number}) => {
  let text = tag;
  if (number != undefined) text = text + ` (${number})`;

  return (
    <_Link to={`/tags/${kebabCase(tag)}`}>
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
