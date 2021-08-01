import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Layout} from '../organisms/Layout';
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
          {categories.map(({name, count}) => (
            <DarkTip key={name} tag={name} number={count} />
          ))}
        </BodyLayout>
      </main>
    </Layout>
  );
};

const BodyLayout = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategorySelectionPage;
