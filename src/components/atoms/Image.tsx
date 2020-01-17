import React from 'react';
import Img from 'gatsby-image';

type Props = {
  imgInfo: {
    publicURL: string;
    childImageSharp: any;
  };
  [key: string]: any;
};

const Image: React.FC<Props> = ({
  imgInfo: {publicURL, childImageSharp},
  ...rest
}) => {
  if (!childImageSharp) {
    // svg系
    return <img src={publicURL} {...rest} />;
  }
  return <Img fluid={childImageSharp.fluid} {...rest} />;
};

export default Image;
