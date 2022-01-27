import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Lorem ipsum',
  promoDescription: '1234',
};

describe('Component HappyHourAd', () => {

  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render title and promoDescription', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    console.log(component.debug());
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date { // zmieniamy działanie new Date() oraz Date.now(), aby zawsze zwracały tę samą wartość ustawioną przez nas
  constructor(...args) { // powyżej definiujemy anonimową klasę (będzie istnieć tylko w tym bloku describe)
    if(args.length){ // jeśli podamy argumenty, wywołamy konstruktor Date (czyli super) z tymi argumentami
      super(...args); // odwołujemy się do konstruktora klasy rodzica tj. Date
    } else { // jeśli nie podanmy argumentów wywołamy Date z podaną przez nas datą
      super(customDate);
    }
    return this;
  }
  static now(){ // metoda statyczna, tj wywołaywana na klasie (a nie na instacji), czyli jako mockDate.now()
    return (new Date(customDate)).getTime(); // getTime wykorzystane do przypisania daty i czasu do innego obiektu Date
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`); // korzystamy z obiektu gloal i podmiamy klasę Date

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate; // podmiana wyżej jest na stałe, więc po wykonaniu testu musimy ją odwrócić
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`); // korzystamy z obiektu gloal i podmiamy klasę Date

    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000); // 'przyspieszamy czas', by wykonało się kolejne renderowanie komponentu

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate; // podmiana wyżej jest na stałe, więc po wykonaniu testu musimy ją odwrócić
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('12:22:58', mockProps.promoDescription);
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});