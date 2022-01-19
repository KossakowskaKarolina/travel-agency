import React from 'react';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

import styles from './OrderSummary.module.scss';

const OrderSummary = (props) => (
  <h2 className={styles.component}>Total <strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong></h2>
)

export default OrderSummary;