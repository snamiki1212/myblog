import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import {DummyImage} from './DummyImage';

type Props = {
  imgInfo: {
    publicURL: string;
    childImageSharp: any;
  };
  [key: string]: any;
  alt: string;
};

export const Image: React.FC<Props> = ({imgInfo, ...rest}) => {
  try {
    if (!imgInfo) {
      return <DummyImage {...rest} />;
    }

    const {publicURL, childImageSharp} = imgInfo;

    if (!childImageSharp) {
      console.warn('Cannot find childImageSharp on Image Component');
      return <img src={publicURL} alt="this-is-image" {...rest} />;
    }

    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        alt="NOTE"
        {...rest}
      />
    );
  } catch (err) {
    console.error('Something error happen on Image Component');
    return <span {...rest}>img</span>;
  }
};
