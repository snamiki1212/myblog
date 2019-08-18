import React from 'react';

// CSS in JS にしたいけど、Remark にてMD をHTMLにパースした結果を、dangerouslySetInnerHTML にて差し替えるのでコンポーネント指定がで出来ないので、SCSSで対応
import './../../styles/post.scss';

export const Markdown = ({html}: {html: any}): JSX.Element => {
  return (
    <div className="markdown-designer">
      <span
        dangerouslySetInnerHTML={{
          /* このDOM が差し替わる */
          __html: html,
        }}
      />
    </div>
  );
};
