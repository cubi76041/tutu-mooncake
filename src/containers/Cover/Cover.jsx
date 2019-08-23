import React from 'react';

import SliderCover from '../../components/SlideCover/SlideCover';
import cover2 from '../../assets/images/cover2.jpg';
import cover3 from '../../assets/images/cover3.jpg';
import styles from './Cover.module.scss';

const images = [cover2, cover3];

const Cover = () => {
  const sliderConfiguration = {
    controls: false
  };

  return (
    <section>
      <SliderCover
        images={images}
        sliderConfiguration={sliderConfiguration}
        className={styles.SlideCover}
      />
    </section>
  );
};

export default Cover;
