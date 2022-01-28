import React from 'react';
import PropTypes from 'prop-types';

const DaysToSummer = (props) => (
  <div>
    <h3 className='title'>{props.text}</h3>
  </div>
);

DaysToSummer.propTypes = {
  text: PropTypes.string,
};

export default DaysToSummer;