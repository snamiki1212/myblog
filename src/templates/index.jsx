import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import HeaderTitle from '../components/HeaderTitle';
import SEO from '../components/SEO';
import Paginator from '../components/Paginator';
import Sidebar from '../components/Sidebar';
import config from '../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={<HeaderTitle />}>
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <IndexContent>
            <IndexPostWrapper>
              <PostListing postEdges={postEdges} />
              <Paginator pageContext={this.props.pageContext} />
            </IndexPostWrapper>
            <Sidebar />
          </IndexContent>
        </div>
      </Layout>
    );
  }
}

const IndexContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const IndexPostWrapper = styled.div`
  flex: 4;
`;

export default Index;

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
