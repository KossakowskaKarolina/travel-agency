import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

//import styles from './OrderForm.module.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption
            {...option}
            currentValue={options[option.id]}
            setOrderOption={setOrderOption}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary cost={tripCost} options={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;