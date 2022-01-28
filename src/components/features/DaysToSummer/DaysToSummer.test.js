import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  days: '.days',
};

const mockProps = {
  text: 'days left',
  days: '44',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render correct text', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.text);
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

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}T10:34:04.543Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.days).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('2022-01-28', '144');
  checkDescriptionAtTime('2022-07-14', '');
  checkDescriptionAtTime('2022-06-20', '1');
  checkDescriptionAtTime('2022-10-10', '254');
});