import { 
  CREATE_COCKTAIL, CREATE_COCKTAIL_SUCCESS, CREATE_COCKTAIL_FAILURE, 
  GET_COCKTAILS, GET_COCKTAILS_FAILURE, GET_COCKTAILS_SUCCESS,
  GET_MY_COCKTAILS, GET_MY_COCKTAILS_FAILURE, GET_MY_COCKTAILS_SUCCESS, 
  GET_PUBLISHED_COCKTAILS, GET_PUBLISHED_COCKTAILS_SUCCESS, GET_PUBLISHED_COCKTAILS_FAILURE, 
  DELETE_COCKTAIL, DELETE_COCKTAIL_SUCCESS, DELETE_COCKTAIL_FAILURE, PUBLISH_COCKTAIL, PUBLISH_COCKTAIL_SUCCESS, PUBLISH_COCKTAIL_FAILURE
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

export const getPublishedCocktails = () => ({type: GET_PUBLISHED_COCKTAILS});
export const getPublishedCocktailsSuccess = (data) => ({type: GET_PUBLISHED_COCKTAILS_SUCCESS, data});
export const getPublishedCocktailsFailure = (error) => ({type: GET_PUBLISHED_COCKTAILS_FAILURE, error});

export const deleteCocktail = (id) => ({type: DELETE_COCKTAIL, id});
export const deleteCocktailSuccess = (data) => ({type: DELETE_COCKTAIL_SUCCESS, data});
export const deleteCocktailFailure = (error) => ({type: DELETE_COCKTAIL_FAILURE, error});

export const publishCocktail = (id) => ({type: PUBLISH_COCKTAIL, id});
export const publishCocktailSuccess = () => ({type: PUBLISH_COCKTAIL_SUCCESS});
export const publishCocktailFailure = (error) => ({type: PUBLISH_COCKTAIL_FAILURE, error});