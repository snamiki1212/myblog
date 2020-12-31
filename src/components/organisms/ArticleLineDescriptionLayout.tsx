import React from 'react';
import styled from 'styled-components';

type Props = {
  image: React.ReactNode;
  logo: React.ReactNode;
  title: React.ReactNode;
  updatedAt: React.ReactNode;
  category: React.ReactNode;
};

const PADDING_SIZE = '10px';

export const ArticleLineDescriptionLayout: React.FC<Props> = ({
  image,
  logo,
  title,
  updatedAt,
  category,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>{image}</ImageWrapper>

      <Description>
        <TitleWrapper>{title}</TitleWrapper>

        <MetaData>
          <LogoWrapper>{logo}</LogoWrapper>

          <UpdatedAtWrapper>{updatedAt}</UpdatedAtWrapper>

          <CategoryWrapper>{category}</CategoryWrapper>
        </MetaData>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${PADDING_SIZE};
  border-bottom: 1px lightgray solid;

  display: flex;
  flex-direction: row;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled(Flex)`
  align-content: space-between;
`;

const MetaData = styled(Flex)`
  align-items: center;
`;

const ImageWrapper = styled.div``;

const LogoWrapper = styled.div``;

const TitleWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
`;

const UpdatedAtWrapper = styled.div`
  margin: 0 5px;
`;

const CategoryWrapper = styled.div``;
