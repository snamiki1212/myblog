import styled from 'styled-components';

export const MixBlender = styled.div`
  position: relative;
  & ::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      130deg,
      #ff7a18,
      #af002d 41.07%,
      #319197 76.05%
    );
    mix-blend-mode: screen;
    top: 0;
    left: 0;
  }
`;
