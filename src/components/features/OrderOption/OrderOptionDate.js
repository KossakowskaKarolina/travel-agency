import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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
  currentValue: PropTypes.string,
};

export default OrderOptionDate;