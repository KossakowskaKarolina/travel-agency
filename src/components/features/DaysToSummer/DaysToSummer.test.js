import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  text: '44 days left',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render correct text', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find('.title').text()).toEqual(mockProps.text);
  });
});