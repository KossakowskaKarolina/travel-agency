import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {

  constructor(){
    super();

    /* run  every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    return (
      <div>
        <h3 className='title'>{this.props.title}</h3>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;