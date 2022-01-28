import React from 'react';
import {shallow} from 'enzyme';
import Phone from './Phone';

describe('Component Phone', () => {
  it('should render without crashing', () => {
    const component = shallow(<Phone />);
    expect(component).toBeTruthy();
  });

  it('should render paragraph', () => {
    const component = shallow(<Phone />);
    expect(component.exists('.number')).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkNumberAtTime = (time, expectedNumber) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Phone  />);
    const renderedTime = component.find('.number').text();
    expect(renderedTime).toEqual(expectedNumber);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkNumberAtTime('08:15:22', 'Amanda, 678.243.8455');
  checkNumberAtTime('12:59:59', 'Tobias, 278.443.6443');
  checkNumberAtTime('21:00:00', 'Helena, 167.280.3970');
  checkNumberAtTime('00:00:00', 'The office opens at 8:00 UTC');
});
