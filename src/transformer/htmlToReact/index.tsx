import React from 'react';
import {unified} from 'unified';
import Rehype2react from 'rehype-react';
import HtmlParser from 'rehype-parse';
import {components} from './components';

const rehype2reactOption = {
  createElement: React.createElement,
  components,
};

const processor = unified()
  // parser
  .use(HtmlParser)
  // transformer
  .use(Rehype2react, rehype2reactOption);

export const renderReactFromHtml = ({html}) =>
  processor.processSync(html).result;
