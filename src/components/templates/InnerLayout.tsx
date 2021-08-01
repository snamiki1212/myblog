import React from 'react';
import styled from 'styled-components';

type Props = {
  section: React.ReactNode;
  aside: React.ReactNode;
};

export const InnerLayout: React.FC<Props> = ({section, aside}) => {
  return (
    <Container>
      <SectionArea>{section}</SectionArea>
      <AsideArea>
        <Sticky>{aside}</Sticky>
      </AsideArea>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
`;

const Sticky = styled.div`
  position: sticky;
  top: 1rem;
`;

const SectionArea = styled.div`
  grid-column: 1 / 2;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: 1 / 3;
  }
`;

const AsideArea = styled.div`
  grid-column: span 1;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: span 2;
  }
`;
