import React from 'react';
import PropTypes from 'prop-types';

import styles from './DaysToSummer.module.scss';

class DaysToSummer extends React.Component {
  getCountdownTime(){
    const currentTime = new Date();
    const currentDate = new Date(Date.UTC(currentTime.getUTCFullYear(),  currentTime.getUTCMonth(), currentTime.getUTCDate()));
    let nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    let days = Math.floor((nextSummer.getTime() - currentDate.getTime())/(1000*60*60*24));

    if(days <= 171 && days > 1){
      return days + ' days to summer';
    } else if(days === 1){
      return days + ' day to summer';
    } else if (days <= 0 && days >= -94){
      return '';
    } else if (days < -94 ) {
      let nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear()+1, 5, 21));
      let days = Math.floor((nextSummer.getTime() - currentDate.getTime())/(1000*60*60*24));
      return days + ' days to summer';
    }
  }

  render(){
    return (
      <div className={styles.component}>
        <h3 className={styles.days}>{this.getCountdownTime()}</h3>
      </div>
    );
  }

}


DaysToSummer.propTypes = {
  text: PropTypes.string,
};

export default DaysToSummer;