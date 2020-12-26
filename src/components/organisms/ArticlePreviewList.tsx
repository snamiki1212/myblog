import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext, SubPageContext} from '../../../gatsby-node/types';
import {Paginator, ArticlesPreviewWrapper} from '../atoms';
import {CategoryBannerList} from '../atoms/CategoryBannerList';
import {AuthorCard, ArticlePreviewCard, ArticlePreviewLine} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
  description?: React.ReactNode;
};

export const ArticlePreviewList: React.FC<Props> = ({
  postEdges,
  context,
  description,
}) => {
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));

  const ArticlePreview = isSP ? ArticlePreviewLine : ArticlePreviewCard;
  return (
    <PageContainer
      style={{
        flexDirection: isSP ? 'column' : 'row',
        padding: isSP ? '0px' : '25px',
      }}
    >
      <MainArea>
        {description}
        <ArticlesPreviewWrapper
          style={{flexDirection: isSP ? 'column' : 'row'}}
        >
          {postEdges.map(
            (edge): React.ReactNode => (
              <ArticlePreview
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )}
        </ArticlesPreviewWrapper>
        <Paginator context={context} />
      </MainArea>

      <AsideArea>
        <AsideItem>
          <AuthorCard />
        </AsideItem>

        <div style={{padding: '10px'}} />
        <AsideItem>
          <CategoryBannerList context={context} />
        </AsideItem>
      </AsideArea>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AsideArea = styled.aside`
  flex: 0;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
`;

const AsideItem = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: ${colors.grayLight};
`
