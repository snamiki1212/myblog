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

export const ArticleCardLayout: React.FC<Props> = ({
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
        <MetaDataWrapper>
          <LogoWrapper>{logo}</LogoWrapper>
          <UpdatedAtWrapper>{updatedAt}</UpdatedAtWrapper>
          <CategoryWrapper>{category}</CategoryWrapper>
        </MetaDataWrapper>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${PADDING_SIZE};
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled(Flex)`
  flex-direction: column;
  align-content: space-between;
`;

const MetaDataWrapper = styled(Flex)`
  align-items: center;
`;

const ImageWrapper = styled.span``;

const TitleWrapper = styled.div`
  padding: 0 10px;
  width: 100%;

  display: flex;
  flex: 1;
  align-items: center;
`;

const MetaData = styled.div`
  padding-left: 5px;
`;

const LogoWrapper = styled(MetaData)``;

const UpdatedAtWrapper = styled(MetaData)``;

const CategoryWrapper = styled(MetaData)``;
