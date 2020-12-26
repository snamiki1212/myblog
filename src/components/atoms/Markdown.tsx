import React from 'react';
import styled from 'styled-components';
import renderReact from '../../compiler/CompilerAsHtmlToReact';

type Props = {htmlAst: any};

export const Markdown: React.FC<Props> = ({htmlAst}) => {
  return <Wrapper>{renderReact(htmlAst)}</Wrapper>;
};

const Wrapper = styled.div`
  word-wrap: break-word;
  width: 100%;
`;
