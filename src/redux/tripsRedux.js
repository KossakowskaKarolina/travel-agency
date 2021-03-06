/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - filter by duration
  if(filters.duration){
    output = output.filter(trip => filters.duration.from <= trip.days && filters.duration.to >= trip.days);
  }

  // DONE - filter by tags
  if(filters.tags){
    output = output.filter(trip => filters.tags.every(tag => trip.tags.includes(tag)));
  }

  // DONE - sort by cost descending (most expensive goes first)
  if(trips){
    output.sort((a, b) => parseFloat(b.cost.substring(1)) - parseFloat(a.cost.substring(1)));
  }

  return output;
};

export const getTripById = ({trips}, tripId) => {
  // DONE - filter trips by tripId
  const filtered = trips.filter(trip => trip.id === tripId);
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  // DONE - filter trips by countryCode
  const filtered = trips.filter(trip => trip.country.code === countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
