import React from 'react';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json'

//import styles from './OrderForm.module.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = (props) => (
  <Grid>
    <Row>
    {pricing.map(option => (
        <Col md={4} key={option.id}><OrderOption name={option.name}/></Col>
    ))}
      <Col xs={12}>
        <OrderSummary cost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  </Grid>
)

export default OrderForm;