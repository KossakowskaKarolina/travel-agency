import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.module.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input className={styles.text} type='text' onChange={event => setOptionValue(event.currentTarget.value)}></input>
  </div>
)

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
}

export default OrderOptionText;