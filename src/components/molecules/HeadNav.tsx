import React from 'react';
import styled from 'styled-components';
import {siteTitle} from '../../../data/SiteConfig';
import {Link} from 'gatsby';
import {blogCardLogo} from '../../../data/SiteConfig';

export const HeadNav: React.FC = () => {
  return (
    <Wrapper>
      <Flex>
        <Link to="/">
          <HoverForSpinArea>
            <Image src={blogCardLogo} alt="blog-logo" loading="lazy" />
          </HoverForSpinArea>
        </Link>

        <_Link to="/">
          <BlogTitle>{siteTitle}</BlogTitle>
        </_Link>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const HoverForSpinArea = styled.div``;

const _Link = styled(Link)`
  transition: 0.3s;
  & :hover {
    transform: scale(1.01);
    transition: 0.3s;
    opacity: 0.6;
  }
`;

const BlogTitle = styled.span`
  color: ${(props) => props.theme.color.primaryVivid};
  font-family: ${(props) => props.theme.fontFamily.logo};
  font-size: ${(props) => props.theme.fontSize.tmp_3}px;
`;
