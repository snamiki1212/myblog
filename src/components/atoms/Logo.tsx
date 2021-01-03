import React from 'react';

export const Logo: React.FC<{size: number}> = ({size}) => {
  return (
    <img
      src="/blogcard.png"
      style={{width: size, height: size}}
      alt="logo-img"
    />
  );
};
