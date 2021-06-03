import { CREATE_COCKTAIL_FAILURE } from './../actionTypes';

const initialState = {
  cocktails: [],
  error: null
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COCKTAIL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default cocktailsReducer;