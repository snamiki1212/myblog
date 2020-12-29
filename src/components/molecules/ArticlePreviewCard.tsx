import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';
import {MarkdownRemarkEdge} from '../../types';
import {UpdatedAt} from '.';
import {Logo} from '../atoms/Logo';
import {Tile} from '../atoms/Tile';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

const sizeOfLogo = 60;

const mixinCenter = css`
  display: grid;
  margin: auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const CategoryName = styled.span`
  border-radius: 10px;
  background: ${props => props.theme.color.primaryVivid};
  color: ${props => props.theme.color.baseDark};
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${sizeOfLogo / 2}px ${sizeOfLogo / 2}px 1fr;
  grid-template-columns: ${sizeOfLogo}px 1fr;
  height: 100%;
  width: 100%;
`;

const GridLogo = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;
`;

const GridCategory = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const GridUpdatedAt = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const GridTitle = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  ${mixinCenter}
`;

const Title = styled.div`
  font-family: ${props => props.theme.fontFamily.primary};
`;

export const ArticlePreviewCard: React.FC<Props> = ({postInfo}) => {
  const title = postInfo.node.frontmatter.title;
  const slug = postInfo.node.fields._slug;
  const imgInfo = postInfo.node.frontmatter.cover;
  const category = 'ここカテゴリ'; // postInfo.node.frontmatter.category;
  const updatedAt = postInfo.node.fields._updatedAt;

  return (
    <Wrapper>
      <Link to={slug}>
        <Wrapper>
          <Tile imgInfo={imgInfo} size={300}>
            <Grid>
              <GridLogo>
                <Logo size={sizeOfLogo} />
              </GridLogo>
              <GridCategory>
                <CategoryName>{category}</CategoryName>
              </GridCategory>
              <GridUpdatedAt>
                <UpdatedAt date={updatedAt} />
              </GridUpdatedAt>
              <GridTitle>
                <Title>{title}</Title>
              </GridTitle>
            </Grid>
          </Tile>
        </Wrapper>
      </Link>
    </Wrapper>
  );

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
