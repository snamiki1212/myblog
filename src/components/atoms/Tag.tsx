import React from 'react';
import styled from 'styled-components';
import kebabCase from 'lodash.kebabcase';
import {Button} from './Button';
import {Link} from 'gatsby';

type Props = {tag: string};

export const Tag: React.FC<Props> = ({tag}) => {
  return (
    <_Link to={`/tags/${kebabCase(tag)}`}>
      <_Button>{`#${tag}`}</_Button>
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
  & :hover {
    transition: 0.3s;
    opacity: 1;
    letter-spacing: 2px;
    background: ${(props) => props.theme.color.baseDark};
  }
`;
