import React from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.daystosummer}><DaysToSummer /></div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} alt="hero-image" src={imageSrc} />
    <div className={styles.happyHour}><HappyHourAd title='Happy Hour'/></div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
