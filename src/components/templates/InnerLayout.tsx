import React from 'react';
import styled from 'styled-components';

type Props = {
  header?: React.ReactNode;
  section: React.ReactNode;
  aside: React.ReactNode;
  footer?: React.ReactNode;
};

export const InnerLayout: React.FC<Props> = ({
  header,
  section,
  aside,
  footer,
}) => {
  return (
    <div>
      {header && <HeaderArea>{header}</HeaderArea>}
      <ArticleAndSidebar>
        <ArticleArea>{section}</ArticleArea>
        <ProfileSection>
          <Sticky>{aside}</Sticky>
        </ProfileSection>
      </ArticleAndSidebar>
      {footer && <div>{footer}</div>}
    </div>
  );
};

const HeaderArea = styled.div`
  margin-bottom: 1rem;
`;

const Sticky = styled.div`
  position: sticky;
  top: 1rem;
`;

const ArticleAndSidebar = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
`;

const ArticleArea = styled.div`
  grid-column: 1 / 2;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: 1 / 3;
  }
`;

const ProfileSection = styled.div`
  grid-column: span 1;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: span 2;
  }
`;
