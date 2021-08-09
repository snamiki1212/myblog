import React from 'react';
import Helmet from 'react-helmet';
import kebabCase from 'lodash.kebabcase';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Layout} from '../templates/Layout';
import {MarkdownRemarkEdge} from '../../types';
import {DarkTip} from '../atoms/DarkTip';

type Props = {
  pageContext: any;
  data: any;
};

export const CategorySelectionPage: React.FC<Props> = ({pageContext, data}) => {
  const {categories} = pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | カテゴリー`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <main>
        <BodyLayout>
          <Flex>
            {categories.map(({name, count}) => (
              <DarkTip
                key={name}
                name={name}
                count={count}
                path={`/categories/${kebabCase(name)}`}
              />
            ))}
          </Flex>
        </BodyLayout>
      </main>
    </Layout>
  );
};

const BodyLayout = styled.div`
  padding: 20px;
  min-height: 50vh;
  max-width: var(--content-width);
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-content: flex-start;
`;

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategorySelectionPage;
