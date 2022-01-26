import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line react/prop-types
const OrderOptionDate = ({currentValue, setOptionValue}) => {
  //const [currentValue, setOptionValue] = useState(new Date());
  return (
    <DatePicker
      selected={currentValue}
      onChange={(value) => setOptionValue(value)}
      isClearable
      placeholderText="Pick a date!"
    />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;