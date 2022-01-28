import React from 'react';

class Phone extends React.Component {
  getNumber(){
    const today = new Date();
    const hour = today.getUTCHours();

    if(hour >=8 && hour <= 11){
      return 'Amanda, 678.243.8455';
    } else if (hour >= 12 && hour <= 15){
      return 'Tobias, 278.443.6443';
    } else if(hour >= 16 && hour <= 21){
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  render() {
    return (
      <span className='number'>{this.getNumber()}</span>

    );
  }
}

export default Phone;