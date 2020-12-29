import React from 'react';
import styled, {css} from 'styled-components';

type Props = {
  logo: React.ReactNode;
  category: React.ReactNode;
  updatedAt: React.ReactNode;
  title: React.ReactNode;
};

export const ArticleCardLayout: React.FC<Props> = ({
  logo,
  category,
  updatedAt,
  title,
}) => {
  return (
    <Grid>
      <GridLogo>{logo}</GridLogo>
      <GridCategory>{category}</GridCategory>
      <GridUpdatedAt>{updatedAt}</GridUpdatedAt>
      <GridTitle>{title}</GridTitle>
    </Grid>
  );
};

const mixinCenter = css`
  display: grid;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.theme.layout.articleCardLogoSize / 2}px ${(
      props
    ) => props.theme.layout.articleCardLogoSize / 2}px 1fr;
  grid-template-columns: ${(props) => props.theme.layout.articleCardLogoSize}px 1fr;
  height: 100%;
  width: 100%;
`;

const GridLogo = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
`;

const GridCategory = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const GridUpdatedAt = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const GridTitle = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  ${mixinCenter}
`;
