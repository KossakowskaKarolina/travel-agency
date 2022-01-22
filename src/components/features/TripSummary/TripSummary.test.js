import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const linkId = 'linkId';
    const component = shallow(<TripSummary tags={[]} id={linkId} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${linkId}`);
  });

  it('should render correct image', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary tags={[]} image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src', 'alt')).toEqual(expectedImage, expectedAlt);
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary tags={[]} name='name' cost='cost' days={123}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});