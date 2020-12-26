import {keyframes, css} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const mixinSpinAnimate = css`
  animation: ${rotate} .8s cubic-bezier(.4,2.21,.91,.97);
`
