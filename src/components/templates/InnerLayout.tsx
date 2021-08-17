import React from 'react';
import styled from 'styled-components';

type Props = {
  section: React.ReactNode;
  aside: React.ReactNode;
  asideVanishable?: React.ReactNode;
  footer?: React.ReactNode;
};

export const InnerLayout: React.FC<Props> = ({
  section,
  aside,
  asideVanishable = undefined,
  footer = undefined,
}) => {
  return (
    <Container>
      <SectionArea>{section}</SectionArea>
      <AsideArea>
        <Sticky>
          {aside}
          <AsideVanishable>{asideVanishable}</AsideVanishable>
        </Sticky>
      </AsideArea>
      <FooterArea>{footer}</FooterArea>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  max-width: var(--content-width);
  margin: 0 auto;
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

const AsideVanishable = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const FooterArea = styled.div`
  grid-column: 1 / 3;
`;
