import React from 'react';
import {unified} from 'unified';
import Rehype2react from 'rehype-react';
import HtmlParser from 'rehype-parse';

const processor = unified()
  // parser
  .use(HtmlParser)
  // transformer
  .use(Rehype2react, {createElement: React.createElement});

export const fromHtmlToToc = (html: string) =>
  processor.processSync(html).result;
