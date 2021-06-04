import { 
  CREATE_COCKTAIL_FAILURE, 
  GET_COCKTAILS_FAILURE, GET_COCKTAILS_SUCCESS, 
  GET_MY_COCKTAILS_SUCCESS, GET_MY_COCKTAILS_FAILURE, 
  GET_PUBLISHED_COCKTAILS_SUCCESS, GET_PUBLISHED_COCKTAILS_FAILURE, 
  DELETE_COCKTAIL_SUCCESS, 
  DELETE_COCKTAIL_FAILURE,
  PUBLISH_COCKTAIL_SUCCESS,
  PUBLISH_COCKTAIL_FAILURE
} from './../actionTypes';

const initialState = {
  cocktails: [],
  error: null
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_SUCCESS:
      return {...state, cocktails: action.data, error: null};
    case GET_COCKTAILS_FAILURE:
      return {...state, error: action.error};
    case CREATE_COCKTAIL_FAILURE:
      return {...state, error: action.error};
    case GET_MY_COCKTAILS_SUCCESS:
      return {...state, cocktails: action.data, error: null};
    case GET_MY_COCKTAILS_FAILURE:
      return {...state, error: action.error};
    case GET_PUBLISHED_COCKTAILS_SUCCESS:
      return {...state, cocktails: action.data, error: null};
    case GET_PUBLISHED_COCKTAILS_FAILURE:
      return {...state, error: action.error};
    case DELETE_COCKTAIL_SUCCESS:
      const cocktailsCopy = [...state.cocktails];
      const index = cocktailsCopy.findIndex(item => item._id === action.data._id);
      cocktailsCopy.splice(index, 1);
      return {...state, cocktails: cocktailsCopy, error: null};
    case DELETE_COCKTAIL_FAILURE:
      return {...state, error: action.error};
    case PUBLISH_COCKTAIL_SUCCESS:
      return {...state, error: null}
    case PUBLISH_COCKTAIL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default cocktailsReducer;