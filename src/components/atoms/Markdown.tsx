import React from 'react';
import styled from 'styled-components';
import {renderReactFromHtml} from '../../transformer/htmlToReact';

type Props = {html: string};

export const Markdown: React.FC<Props> = ({html}) => {
  return <Wrapper>{renderReactFromHtml({html})}</Wrapper>;
};

const Wrapper = styled.div`
  word-wrap: break-word;
  width: 100%;
`;
