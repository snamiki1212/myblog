import React from 'react';
import Image from '../atoms/Image';
import styled, {css} from 'styled-components';
import {colors} from '../../../data/color';

// REF: https://markoskon.com/gatsby-background-image-example/

const mixinChild = css`
  position: absolute;
  top: 0;
`;

const Parent = styled.div`
  position: relative;
  width: 430px;
  height: 430px;
  border-radius: 10px;
  background: ${colors.baseDark}B3; // README: https://stackoverflow.com/questions/15852122/hex-transparency-in-colors
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

export const Tile: React.FC<{imgInfo: any}> = ({imgInfo, children}) => {
  return (
    <Parent>
      <ChildBackground imgInfo={imgInfo} />
      <ChildContent>{children}</ChildContent>
    </Parent>
  );
};