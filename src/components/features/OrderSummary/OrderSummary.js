import React from 'react';
import PropTypes from 'prop-types';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

import styles from './OrderSummary.module.scss';

const OrderSummary = (props) => (
  <h2 className={styles.component}>Total <strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong></h2>
)

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
}

export default OrderSummary;