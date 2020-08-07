import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {MyLinks} from '../atoms';
import {TextWithUnderline} from '../atoms/TextWithUnderline';

export const AuthorCard: React.FC = () => (
  <Container>
    <AuthorInfo>
      <Avator src={config.userAvatar} alt={config.autherName} />
      <TextWithUnderline>{config.autherName}</TextWithUnderline>
      <Discription>{config.userDescription}</Discription>
    </AuthorInfo>

    <ButtonContainer>
      <Link to="/about">
        <_Button variant="outlined">▷プロフィールを読む</_Button>
      </Link>
    </ButtonContainer>

    <MyLinks />
  </Container>
);

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const _Button = styled(Button)`
  flex: 1;
  color: ${colors.vivid1};
`;

const Discription = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;
