import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface StaticQueryProps {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

class Image4 extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <StaticQuery // tslint:disable-next-line:jsx-no-multiline-js
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "layer7.png" }) {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => (
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Gatsby + TypeScript"
          />
        )}
      />
    );
  }
}

export default Image4;
