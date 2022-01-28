import React from 'react';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  getCountdownTime(){
    const currentTime = new Date();
    const currentDate = new Date(Date.UTC(currentTime.getUTCFullYear(),  currentTime.getUTCMonth(), currentTime.getUTCDate()));
    let nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    let days = Math.floor((nextSummer.getTime() - currentDate.getTime())/(1000*60*60*24));

    if(days <= 171 && days > 0){
      return days;
    } else if (days <= 0 && days >= -94){
      return '';
    } else if (days < -94 ) {
      let nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear()+1, 5, 21));
      return Math.floor((nextSummer.getTime() - currentDate.getTime())/(1000*60*60*24));
    }
  }

  render(){
    //const countdownTime = this.getCountdownTime();
    return (
      <div>
        <h3 className='title'>{this.props.text}</h3>
        <h3 className='days'>{this.getCountdownTime()}</h3>
      </div>
    );
  }

}


DaysToSummer.propTypes = {
  text: PropTypes.string,
};

export default DaysToSummer;