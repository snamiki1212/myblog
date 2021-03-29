import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

const useDummyDataQuery = () => {
  const data = useStaticQuery(graphql`
    query DummyImageQuery {
      allFile(filter: {relativePath: {eq: "eyecatch.webp"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const fluid = data?.allFile?.edges[0]?.node?.childImageSharp?.fluid;
  return fluid;
};

export function DummyImage(props: any) {
  const fluid = useDummyDataQuery();
  return <Img fluid={fluid} alt="dummy-data" {...props} />;
}
