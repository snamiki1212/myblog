import React from 'react';
import renderReact from '../../compiler/CompilerAsHtmlToReact';

type Props = {htmlAst: any};

export const Markdown: React.FC<Props> = ({htmlAst}) => {
  return (
    <div
      style={{
        wordWrap: 'break-word',
        width: '100%',
      }}
    >
      {renderReact(htmlAst)}
    </div>
  );
};
