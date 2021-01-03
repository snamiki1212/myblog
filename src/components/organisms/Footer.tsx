import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from '../atoms/Logo';
import {Link} from 'gatsby';
import {mixinSpinAnimate} from '../atoms/SpinAnimation';
import {FooterNav} from '../molecules/FooterNav';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <LogoLink />
        <FooterNav />
        <Bottom />
      </Content>
    </Wrapper>
  );
};

const LogoLink: React.FC = () => (
  <Link to="/">
    <HoverForSpinArea>
      <LogoWrapper>
        <Logo size={146} />
      </LogoWrapper>
    </HoverForSpinArea>
  </Link>
);

const Bottom: React.FC = () => (
  <BottomWrapper>
    <HR />
    <Copyright>{config.copyright}</Copyright>
  </BottomWrapper>
);

const BottomWrapper = styled.div`
  width: 100%;
`;

const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.color.primaryVivid};
`;

const Copyright = styled.footer`
  color: ${(props) => props.theme.color.baseLight};
  padding: 10px 0;
  text-align: center;
`;

const LogoWrapper = styled.div``;

const HoverForSpinArea = styled.div`
  & :hover {
    ${LogoWrapper} {
      ${mixinSpinAnimate}
    }
  }
`;

const Wrapper = styled.div`
  height: 600px;
  background: ${(props) => props.theme.color.baseDark};
`;

const Content = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
