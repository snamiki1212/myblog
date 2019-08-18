import React from 'react';
import renderReact from '../../compiler/CompilerAsHtmlToReact';

export const Markdown = ({htmlAst}: {htmlAst: any}): JSX.Element => {
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
