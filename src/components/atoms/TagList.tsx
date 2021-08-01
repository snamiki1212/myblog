import React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Button} from './Button';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Wrapper>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </Wrapper>
  );
};

const Tag: React.FC<{tag: string}> = ({tag}) => {
  return (
    <_Link to={`/tags/${kebabCase(tag)}`}>
      <_Button>{`#${tag}`}</_Button>
    </_Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

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
