import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {

  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='text' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('should render correct name', () => {
    const expectedName = 'Lorem ipsum';
    const component = shallow(<OrderOption type='text' name={expectedName} />);

    expect(component.find('.title').text()).toEqual(expectedName);
  });
});