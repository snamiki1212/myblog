import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext, SubPageContext} from '../../../gatsby-node_';
import {Paginator, SubPageLinks, ArticlePreviewsContaienr} from '../atoms';
import {AuthorCard, ArticlePreviewCard} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';
import Img from 'gatsby-image';
import {Link} from 'gatsby';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {useTheme} from '@material-ui/core/styles';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
};

const PADDING_SIZE = '10px';
export const ArticleListContainer: React.FC<Props> = ({postEdges, context}) => {
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageContainer>
      <ArticleArea>
        {isSP ? (
          postEdges.map(
            (edge): JSX.Element => (
              <Link
                to={edge.node.fields._slug}
                key={edge.node.frontmatter.title}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: PADDING_SIZE,

                  borderBottom: '1px lightgray solid',
                }}
              >
                <Img
                  fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
                  style={{flex: 3}}
                />
                <span
                  style={{
                    flex: 4,
                    fontSize: '0.8em',
                    paddingLeft: PADDING_SIZE,
                  }}
                >
                  {edge.node.frontmatter.title}
                </span>
              </Link>
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
