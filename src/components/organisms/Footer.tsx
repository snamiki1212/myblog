import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from '../atoms/Logo';
import {Link} from 'gatsby';
import {FooterNav} from '../molecules/FooterNav';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <LogoWrapper>
            <Link to="/">
              <Logo size={114} />
            </Link>
          </LogoWrapper>

          <FooterNav />

          <BottomWrapper>
            <HR />
            <Copyright>{config.copyright}</Copyright>
          </BottomWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
`;

const HR = styled.hr`
  border: 1px solid var(--vivid1);
`;

const Copyright = styled.footer`
  color: var(--base-light);
  padding: 10px 0;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.logoEn};
`;

const LogoWrapper = styled.div`
  transition: 0.3;
  opacity: 0.8;
  & :hover {
    transition: 0.3;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  padding-top: 30px;
  background: var(--base-light);
`;

const ContentWrapper = styled.div`
  background: linear-gradient(
    145deg,
    var(--base-dark),
    var(--base-dark-E6),
    var(--base-dark)
  );
`;

const Content = styled.div`
  height: 100%;
  width: 80%;
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
