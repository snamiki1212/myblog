import React from 'react';
import styled from 'styled-components';

type Props = {
  avator: React.ReactNode;
  name: React.ReactNode;
  sns: React.ReactNode;
  description: React.ReactNode;
  toProfile: React.ReactNode;
};

export const AuthorCardLayout: React.FC<Props> = ({
  avator,
  name,
  sns,
  description,
  toProfile,
}) => {
  return (
    <Grid>
      <GridAvator>
        {avator}
      </GridAvator>

      <GridName>
        {name}
      </GridName>

      <GridSNS>
        {sns}
      </GridSNS>

      <GridDescription>
        {description}
      </GridDescription>

      <GridProfileLink>
        {toProfile}
      </GridProfileLink>
    </Grid>
  );
};

export const avatorSizeNum = 60;

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${props => props.theme.layout.autherAvatorSizeNum / 2}px ${props => props.theme.layout.autherAvatorSizeNum / 2}px 1fr 0.5fr;
  grid-template-columns: ${props => props.theme.layout.autherAvatorSizeNum}px 1fr;
`;

const GridAvator = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
`;

const GridName = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const GridSNS = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const GridDescription = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
`;

const GridProfileLink = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;
`;