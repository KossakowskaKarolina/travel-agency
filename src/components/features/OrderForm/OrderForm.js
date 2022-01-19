import React from 'react';

import OrderSummary from '../OrderSummary/OrderSummary';

//import styles from './OrderForm.module.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = (props) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary cost={props.tripCost}/>
      </Col>
    </Row>
  </Grid>
)

export default OrderForm;