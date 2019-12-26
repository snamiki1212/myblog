import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {MyLinks} from '../atoms';

export const AuthorCard: React.FC = () => (
  <Container>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avator src={config.userAvatar} alt={config.autherName} />
      <Name>{config.autherName}</Name>
      <Discription>{config.userDescription}</Discription>
    </div>
    <Link to="/about" style={{display: 'flex'}}>
      <Button variant="outlined" style={{flex: 1}}>
        <span>▷プロフィールを読む</span>
      </Button>
    </Link>
    <MyLinks />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  alin-items: center;
  justify-content: center;
  color: ${colors.gray2};
`;

const Avator = styled.img`
  width: 150px;
  border-radius: 100%;
`;

const Name = styled.div`
  font-size: 32px;
  color: ${colors.black1};
  border-bottom: 1px solid ${colors.vivid2};

  font-family: 'Megrim', 'Yu Gothic M', 'Raleway'; // TODO: megrim import
  text-align: center;
  padding: 20px 0;
`;

const Discription = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;
