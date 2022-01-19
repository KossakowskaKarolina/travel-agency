import React from 'react';

import styles from './OrderSummary.module.scss';

const OrderSummary = (props) => (
  <h2 className={styles.component}>Total <strong>{props.cost}</strong></h2>
)

export default OrderSummary;