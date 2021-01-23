import styled from 'styled-components';

export const MixBlender = styled.div`
  position: relative;
  & ::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      140deg,
      ${(props) =>
        props.theme.color.primaryVivid +
        ',' +
        props.theme.color.baseDark +
        ',' +
        props.theme.color.primaryVivid}
    );

    mix-blend-mode: screen;
    top: 0;
    left: 0;
  }
`;
