
import { 
  CREATE_COCKTAIL, CREATE_COCKTAIL_SUCCESS, CREATE_COCKTAIL_FAILURE, 
  GET_COCKTAILS, GET_COCKTAILS_FAILURE, GET_COCKTAILS_SUCCESS,
  GET_MY_COCKTAILS, GET_MY_COCKTAILS_FAILURE, GET_MY_COCKTAILS_SUCCESS
} from './../actionTypes';

export const createCocktail = (data) => ({type: CREATE_COCKTAIL, data});
export const createCocktailSuccess = () => ({type: CREATE_COCKTAIL_SUCCESS});
export const createCocktailFailure = (error) => ({type: CREATE_COCKTAIL_FAILURE, error});

export const getCocktails = () => ({type: GET_COCKTAILS});
export const getCocktailsSuccess = (data) => ({type: GET_COCKTAILS_SUCCESS, data});
export const getCocktailsFailure = (error) => ({type: GET_COCKTAILS_FAILURE, error});

export const getMyCocktails = () => ({type: GET_MY_COCKTAILS});
export const getMyCocktailsSuccess = (data) => ({type: GET_MY_COCKTAILS_SUCCESS, data});
export const getMyCocktailsFailure = (error) => ({type: GET_MY_COCKTAILS_FAILURE, error});