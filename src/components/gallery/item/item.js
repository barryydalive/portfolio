import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, ImageContainer } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
    <ImageContainer>
      <Img
        fluid={
          image
            ? {
                ...image.childImageSharp.fluid,
                aspectRatio: 1.5,
              }
            : {}
        }
        alt={title}
      />
    </ImageContainer>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
