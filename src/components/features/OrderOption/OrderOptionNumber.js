import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.module.scss';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input
      className={styles.input}
      type = 'number'
      value = {currentValue}
      min = {limits.min} max = {limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})
  </div>
)

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
}

export default OrderOptionNumber;