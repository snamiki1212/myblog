import styled from 'styled-components';

export const MixBlender = styled.div`
  position: relative;
  & ::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      120deg,
      ${(props) => '#1f005c, #097341, ' + props.theme.color.primaryVivid}
    );
    animation: huerotator 1.5s infinite alternate;

    @keyframes huerotator {
      0% {
        -webkit-filter: hue-rotate(0deg);
        filter: hue-rotate(0deg);
      }

      100% {
        -webkit-filter: hue-rotate(360deg);
        filter: hue-rotate(360deg);
      }
    }

    mix-blend-mode: screen;
    top: 0;
    left: 0;
  }
`;
