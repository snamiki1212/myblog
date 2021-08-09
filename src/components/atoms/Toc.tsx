import React from 'react';
import './Toc.scss';

export const Toc: React.FC<{toc: React.ReactNode}> = ({toc}) => {
  return <div id="toc">{toc}</div>;
};
