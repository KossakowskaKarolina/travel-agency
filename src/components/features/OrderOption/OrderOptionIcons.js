import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon/Icon'
import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.module.scss';

const OrderOptionIcons = ({values, setOptionValue, required, currentValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name='times-circle' /> None
      </div>
    )}
    {values.map(value => (
      <div className={value.id === currentValue ? styles.iconActive : styles.icon} key={value.id} onClick={id => setOptionValue(value.id)}>
        <Icon name={value.icon} /> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
)

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
}

export default OrderOptionIcons;


