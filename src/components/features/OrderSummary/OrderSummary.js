import React from 'react';
import PropTypes from 'prop-types';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import { promoPrice } from '../../../utils/promoPrice';

import styles from './OrderSummary.module.scss';

const OrderSummary = (props) => (
  <div className={styles.component}>
    <h2>Price from: <strong>{formatPrice(promoPrice(calculateTotal(props.cost, props.options), 20))}</strong></h2>
    <h4 className={styles.standardprice}>Standard price: <strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong></h4>
  </div>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;