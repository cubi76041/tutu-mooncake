import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './SlideCover.module.scss';

const SlideCover = props => {
  const { images, sliderConfiguration, style, className } = props;
  return (
    <Carousel
      {...sliderConfiguration}
      className={`${styles.SlideCover} ${className}`}
      style={style}
    >
      {images.map(image => (
        <Carousel.Item key={image}>
          <Image src={image} className={`image ${styles.SlideCoverImage}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

SlideCover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sliderConfiguration: PropTypes.object
};

SlideCover.defaultProps = {
  sliderConfiguration: {}
};

export default SlideCover;
