import React from 'react';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  max-width: var(--content-width);
  width: 100%;
`;

const OnMouse = styled.div`
  transition: 0.5s;
  opacity: 0.8;
  & :hover {
    transition: 0.3s;
    opacity: 1;
  }
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
  color: var(--vivid1);
  font-family: var(--ff-logoEn);
  font-size: ${(props) => props.theme.fontSize.tmp_3}px;
  & :hover,
  & :active {
    color: var(--vivid1);
  }
`;
