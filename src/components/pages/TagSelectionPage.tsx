import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import {Layout} from '../organisms/Layout';
import {MarkdownRemarkEdge} from '../../types';
import {Link} from 'gatsby';
import {Button} from '../atoms/Button'

type Props = {
  pageContext: any;
  data: any;
};

export const TagSelectionPage: React.FC<Props> = ({pageContext, data}) => {
  const {tags} = pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | タグ`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <main>
        {tags.map(({name, count, path}) => {
          return (
            <Button key={name}>
              <Link to={path}>{`${name}(${count})`}</Link>
            </Button>
          );
        })}
      </main>
    </Layout>
  );
};

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default TagSelectionPage;
