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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa', // równe values[0].id - symulujemy sytuację, w której opcja ma już jakąś wartość, którą chcemy zmienić na inną
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = { // zawiera propsy istotne tylko dla konkretnego typu opcji
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => { //renderujemy komponent przed każdym z testów 'it', aby nie używać shallow w każdym z nich
      mockSetOrderOption = jest.fn(); // mockowanie funkcji (wbudowane w jesta)
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />,
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select'); // sprawdzamy obecność selecta
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length; // sprawdzamy opcję z pustą wartością
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]'); // sprawdzamy mockowane wartości
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1); // sprawdzamy czy funkcja wykonała się dokładnie jeden raz
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue }); //sprawdzamy czy została wywołana z poprawnymi argumentami
        });

        break;
      }

      case 'icons': {
        it('contains div with icon class', () => {
          const icon = renderedSubcomponent.find('div .icon');
          expect(icon).toBeTruthy();
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div div:last-child').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: mockProps.values[1].id });
        });
        break;
      }

      case 'checkboxes': {

        break;
      }

      case 'number': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });

        break;
      }

      case 'text': {
        it('contains input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'date': {

        break;
      }
    }

  },
  );
}
