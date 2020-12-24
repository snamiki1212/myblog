import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {SubPageContext} from '../../../gatsby-node/types';

type Props = {context: SubPageContext};

export const SubPageLinks: React.FC<Props> = ({context}) => {
  return (
    <Container>
      <CategoryContainer>
        <div>▼カテゴリー</div>
        {context.categories.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        ))}
      </CategoryContainer>

      <div>
        <div>▼タグ</div>
        {context.tags.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>
              <div>{`${name}(${count})`}</div>
            </Link>
          </Button>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;

const CategoryContainer = styled.div`
  padding-bottom: 20px;
`;
