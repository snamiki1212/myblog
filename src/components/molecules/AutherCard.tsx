import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {MyLinks} from '../atoms';
import {TextWithUnderline} from '../atoms/TextWithUnderline';
import {AuthorCardLayout, avatorSizeNum} from '../atoms/AuthorCardLayout';

export const AuthorCard: React.FC = () => (
  <AuthorCardLayout
    avator={<Avator src={config.userAvatar} alt={config.autherName} />}
    name={<TextWithUnderline>{config.autherName}</TextWithUnderline>}
    sns={<MyLinks />}
    description={<Discription>{config.userDescription}</Discription>}
    toProfile={
      <ButtonWrapper>
        <Link to="/about">
          <_Button variant="outlined">プロフィールもっと読む</_Button>
        </Link>
      </ButtonWrapper>
    }
  />
);

const Avator = styled.img`
  width: ${avatorSizeNum}px;
  border-radius: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const _Button = styled(Button)`
  flex: 1;
  color: ${colors.DEPRECATED_vivid1};
`;

const Discription = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;
