import React from 'react';
import renderReact from '../../compiler/CompilerAsHtmlToReact';
// CSS in JS にしたいけど、Remark にてMD をHTMLにパースした結果を、dangerouslySetInnerHTML にて差し替えるのでコンポーネント指定がで出来ないので、SCSSで対応
import './../../styles/post.scss';

export const Markdown = ({html}: {html: any}): JSX.Element => {
  return (
    <div
      style={{
        wordWrap: 'break-word',
        width: '100%',
      }}
    >
      {renderReact(html)}
    </div>
  );
};
