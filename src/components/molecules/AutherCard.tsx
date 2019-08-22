import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {MyLinks} from '../atoms';

export const AuthorCard = (): JSX.Element => (
  <Container>
    <Link to="/about">
      <Button>
        <div>
          <Avator src={config.userAvatar} alt={config.autherName} />
          <Name>{config.autherName}</Name>
          <Discription>{config.userDescription}</Discription>
        </div>
      </Button>
    </Link>

    <MyLinks />
  </Container>
);

const Container = styled.div`
  width: 100%;
  color: ${colors.fontGray1};
`;

const Avator = styled.img`
  width: 150px;
  border-radius: 100%;
`;

const Name = styled.div`
  font-size: 32px;
  color: ${colors.fontBlack1};
  border-bottom: 1px solid ${colors.fontVivid1};

  font-family: 'Megrim', 'Yu Gothic M', 'Raleway'; // TODO: megrim import
  text-align: center;
  padding: 20px 0;
`;

const Discription = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;
