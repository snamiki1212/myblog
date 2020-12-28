import React from 'react';
import Image from '../atoms/Image';
import styled, {css} from 'styled-components';

// REF: https://markoskon.com/gatsby-background-image-example/

const mixinChild = css`
  position: absolute;
  top: 0;
`;

const Parent = styled.div<{size: number}>`
  position: relative;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border-radius: 10px;
  background: ${props => props.theme.color.baseDark}B3; // README: https://stackoverflow.com/questions/15852122/hex-transparency-in-colors
`;

const ChildContent = styled.div`
  ${mixinChild};
  width: 100%;
  height: 100%;
`;

const ChildBackground = styled(Image)`
  ${mixinChild};
  z-index: -1;
  height: 100%;
  border-radius: 10px;
`;

export const Tile: React.FC<{imgInfo: any, size: number}> = ({imgInfo, size, children}) => {
  return (
    <Parent size={size}>
      <ChildBackground imgInfo={imgInfo} />
      <ChildContent>{children}</ChildContent>
    </Parent>
  );
};