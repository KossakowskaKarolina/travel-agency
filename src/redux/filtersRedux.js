/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// DONE - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types

    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };

    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags.filter(tag => action.payload !== tag)],
      };

    case CHANGE_DURATION_FROM:
      console.log(statePart, action.payload);
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };

      case CHANGE_DURATION_TO:
      console.log(statePart, action.payload);
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return statePart;
  }
}
