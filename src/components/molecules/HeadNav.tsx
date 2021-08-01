import React from 'react';
import styled, {css} from 'styled-components';
import {siteTitle} from '../../../data/SiteConfig';
import {Link} from 'gatsby';
import {blogCardLogo} from '../../../data/SiteConfig';

export const HeadNav: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <OnMouse>
          <Flex>
            <Image src={blogCardLogo} alt="blog-logo" loading="lazy" />
            <BlogTitle>{siteTitle}</BlogTitle>
          </Flex>
        </OnMouse>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const mixinOnMouse = css`
  transition: 0.5s;
  & :hover {
    transition: 0.3s;
    opacity: 0.6;
  }
`;
const OnMouse = styled.div`
  ${mixinOnMouse}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const BlogTitle = styled.span`
  color: ${(props) => props.theme.color.primaryVivid};
  font-family: ${(props) => props.theme.fontFamily.logoEn};
  font-size: ${(props) => props.theme.fontSize.tmp_3}px;
`;
