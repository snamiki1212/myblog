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
      <Button variant="outlined" style={{flex: 1, color: colors.vivid1}}>
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
  color: ${colors.grayDark};
`;

const Avator = styled.img`
  width: 150px;
  border-radius: 100%;
`;

const Name: React.FC = ({children}) => (
  <div
    style={{
      fontSize: '32px',
      color: 'gray',
      textAlign: 'center',
      padding: '20px 0',
    }}
  >
    {children}
    <NameBorder />
  </div>
);

const NameBorder = styled.div`
  background: linear-gradient(to right, ${colors.vivid1}, ${colors.vivid2});
  height: 3px;
`;

const Discription = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;
