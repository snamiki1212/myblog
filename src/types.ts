import {FluidObject} from 'gatsby-image';

export interface MarkdownRemarkEdge {
  node: {
    fields: {
      _slug: string;
      _createdAt: Date;
      _updatedAt: Date;
    };
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      title: string;
      tags: string;
      cover: {
        publicURL: string;
        // TODO: graphqlで取得してないので、これを消したい
        childImageSharp: {
          fluid: FluidObject;
        };
      };
      createdAt: Date;
      updatedAt: Date;
    };
  };
}
