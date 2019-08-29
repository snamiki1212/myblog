import React from 'react';
import Img from 'gatsby-image';
import {FluidObject} from 'gatsby-image';

interface Props {
  fluid: FluidObject;
  coverHeight: number;
}

export const PostCoverRaw = ({fluid, coverHeight}: Props): JSX.Element => {
  return <Img fluid={fluid} style={{height: coverHeight, width: '100%'}} />;
};
