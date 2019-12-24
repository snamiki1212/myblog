import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext, SubPageContext} from '../../../gatsby-node_';
import {Paginator, SubPageLinks, ArticlePreviewsContaienr} from '../atoms';
import {AuthorCard, ArticlePreviewCard, ArticlePreviewLine} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {useTheme} from '@material-ui/core/styles';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
};

export const ArticleListContainer: React.FC<Props> = ({postEdges, context}) => {
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageContainer>
      <ArticleArea>
        {isSP ? (
          postEdges.map(
            (edge): JSX.Element => (
              <ArticlePreviewLine
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )
        ) : (
          <ArticlePreviewsContaienr>
            {postEdges.map(
              (edge): JSX.Element => (
                <ArticlePreviewCard
                  key={edge.node.frontmatter.title}
                  postInfo={edge}
                />
              )
            )}
          </ArticlePreviewsContaienr>
        )}

        <Paginator context={context} />
      </ArticleArea>

      <AsideArea>
        <AuthorCard />
        <SubPageLinks context={context} />
      </AsideArea>
    </PageContainer>
  );
};

const AsideArea = styled.aside`
  flex: 1;
  width: 100%;
  min-width: 250px;
  padding: 24px;

  background-color: ${colors['backgroundWhite2']};
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ArticleArea = styled.div`
  flex: 4;
`;

export default ArticleListContainer;
