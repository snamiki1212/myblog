import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';

import {MarkdownRemarkEdge} from '../../types';
import {UpdatedAt} from '.';
import Image from '../atoms/Image';
import {Logo} from '../atoms/Logo';

import { colors } from '../../../data/color'

type Props = {
  postInfo: MarkdownRemarkEdge;
};

const sizeOfLogo = 80
const mixinCenter = css`
  display: grid;
  margin: auto;
`;
const Wrapper = styled.div`
  width: 430px;
  height: 430px;
  border-radius: 10px;
  background: ${colors.baseDark};

  position: relative;
`;

const CategoryName = styled.span`
  border-radius: 10px;
  background: ${colors.primaryVivid};
  color: ${colors.baseDark};
  padding: 0 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${sizeOfLogo}px 1fr .1fr;
  grid-template-columns: ${sizeOfLogo}px 1fr;
  height: 100%;
  width: 100%;
`

const GridLogo = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const GridCategory = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  ${mixinCenter}
`

const GridTitle = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  ${mixinCenter}
`;

const GridUpdatedAt = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  ${mixinCenter}
`;

const Title = styled.div``

// const ImageWrapper = styled.div`
//   position: absolute;
//     left: 0;
//     top: 0;
//     width: 400px;
// `
// const Header = styled.div``

export const ArticlePreviewCard: React.FC<Props> = ({postInfo}) => {
  const title = postInfo.node.frontmatter.title;
  const slug = postInfo.node.fields._slug;
  // const imgInfo = postInfo.node.frontmatter.cover;
  const category = "ここカテゴリ" // postInfo.node.frontmatter.category;
const updatedAt = postInfo.node.fields._updatedAt

return(
  <Link to={slug}>
    <Wrapper>
      <Grid>
        <GridLogo>
          <Logo size={sizeOfLogo} />
        </GridLogo>
        <GridCategory>
          <CategoryName>{category}</CategoryName>
        </GridCategory>
        <GridTitle>
          <Title>{title}</Title>
        </GridTitle>
        <GridUpdatedAt>
          <UpdatedAt date={updatedAt}/>
        </GridUpdatedAt>
      </Grid>
      {/* <ImageWrapper>
        <Image imgInfo={imgInfo} />
      </ImageWrapper> */}
    </Wrapper>
  </Link>
)


  // return (
  //   <_Card key={}>
  //     <_CardAction>
  //       <Link to={}>
  //         <_CardMedia>
  //           <Image
  //             imgInfo={}
  //             style={{maxHeight: '100px'}}
  //           />
  //         </_CardMedia>

  //         <CardContent>
  //           <ContentDate>
  //             <UpdatedAt
  //               date={}
  //               containerStyle={{justifyContent: 'flex-end'}}
  //             />
  //           </ContentDate>
  //           <ContenTitle>{}</ContenTitle>

  //         </CardContent>
  //       </Link>
  //     </_CardAction>
  //   </_Card>
  // );
};

// const _Card = styled(Card)`
//   margin: 10px;
//   width: 45%;
// `;

// const _CardAction = styled(CardActionArea)`
//   height: 300px;
// `;

// const _CardMedia = styled(CardMedia)`
//   text-align: center;
// `;

// const ContenTitle = styled.div`
//   font-weight: bold;
//   font-size: 20px;
// `;

// const ContentDate = styled.div`
//   text-align: right;
//   font-size: 12px;
//   margin-bottom: 8px;
// `;

// const ContentExcerpt = styled(CardContent)`
//   font-size: 12px;

//   position: relative;
//   &::after {
//     content: '';
//     display: block;

//     background: linear-gradient(
//       to bottom,
//       rgba(255, 255, 255, 0),
//       rgba(255, 255, 255, 0.8) 50%,
//       rgba(255, 255, 255, 1)
//     );
//     height: 100px;
//     width: 100%;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//   }
// `;
