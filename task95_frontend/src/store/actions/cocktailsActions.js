
import { 
  CREATE_COCKTAIL, CREATE_COCKTAIL_SUCCESS, CREATE_COCKTAIL_FAILURE 
} from './../actionTypes';

export const createCocktail = (data) => ({type: CREATE_COCKTAIL, data});
export const createCocktailSuccess = () => ({type: CREATE_COCKTAIL_SUCCESS});
export const createCocktailFailure = (error) => ({type: CREATE_COCKTAIL_FAILURE, error});