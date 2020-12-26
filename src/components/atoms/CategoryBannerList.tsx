import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {SubPageContext} from '../../../gatsby-node/types';

type Props = {context: SubPageContext};


export const CategoryBannerList: React.FC<Props> = ({context}) => {
  return (
    <Wrapper>
        <HeaderText>Category</HeaderText>
        {context.categories.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //
`;

const HeaderText = styled.p`
  font-size: 30px;
`

