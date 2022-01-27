import React from 'react';
import PropTypes from 'prop-types';

const HappyHourAd = (props) => {
  return (
    <div>
      <h3 className='title'>{props.title}</h3>
      <div className='promoDescription' />
    </div>
  );
};

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;