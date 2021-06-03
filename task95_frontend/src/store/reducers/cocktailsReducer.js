import { CREATE_COCKTAIL_FAILURE, GET_COCKTAILS_FAILURE, GET_COCKTAILS_SUCCESS } from './../actionTypes';

const initialState = {
  cocktails: [],
  error: null
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_SUCCESS:
      return {...state, cocktails: action.data};
    case GET_COCKTAILS_FAILURE:
      return {...state, error: action.error};
    case CREATE_COCKTAIL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default cocktailsReducer;