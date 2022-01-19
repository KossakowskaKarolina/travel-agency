import React from 'react';

import styles from './OrderOption.module.scss';

const OrderOption = (props) => (
<div className={styles.component}>
  <h3 className={styles.title}>{props.name}</h3>
</div>
)

export default OrderOption;