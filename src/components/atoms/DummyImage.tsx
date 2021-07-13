import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import {useStaticQuery, graphql} from 'gatsby';

const useDummyDataQuery = () => {
  const data = useStaticQuery(graphql`
    query DummyImageQuery {
      allFile(filter: {relativePath: {eq: "blogcard.webp"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                aspectRatio: 1.0
                width: 150
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);
  const img = data?.allFile?.edges[0]?.node?.childImageSharp?.gatsbyImageData;
  return img;
};

export function DummyImage(props: any) {
  const img = useDummyDataQuery();
  return <GatsbyImage image={img} alt="dummy-data" {...props} />;
}
