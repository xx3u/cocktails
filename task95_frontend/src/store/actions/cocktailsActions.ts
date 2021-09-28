import { 
  CREATE_COCKTAIL, CREATE_COCKTAIL_SUCCESS, CREATE_COCKTAIL_FAILURE, 
  GET_COCKTAILS, GET_COCKTAILS_FAILURE, GET_COCKTAILS_SUCCESS,
  GET_MY_COCKTAILS, GET_MY_COCKTAILS_FAILURE, GET_MY_COCKTAILS_SUCCESS, 
  GET_PUBLISHED_COCKTAILS, GET_PUBLISHED_COCKTAILS_SUCCESS, GET_PUBLISHED_COCKTAILS_FAILURE, 
  DELETE_COCKTAIL, DELETE_COCKTAIL_SUCCESS, DELETE_COCKTAIL_FAILURE, PUBLISH_COCKTAIL, PUBLISH_COCKTAIL_SUCCESS, PUBLISH_COCKTAIL_FAILURE
} from '../actionTypes';
import { CocktailsType } from '../reducers/cocktailsReducer';

type CreateCocktailActionType = {
  data: CocktailsType
  type: typeof CREATE_COCKTAIL
}

type CreateCocktailSuccessActionType = {
  type: typeof CREATE_COCKTAIL_SUCCESS
}

type CreateCocktailFailureActionType = {
  error: string
  type: typeof CREATE_COCKTAIL_FAILURE
}

type GetCocktailActionType = {
  type: typeof GET_COCKTAILS
}

type GetCocktailSuccessActionType = {
  type: typeof GET_COCKTAILS_SUCCESS
  data: Array<CocktailsType>
}

type GetCocktailFailureActionType = {
  error: string
  type: typeof GET_COCKTAILS_FAILURE
}

type GetMyCocktailsActionType = {
  type: typeof GET_MY_COCKTAILS
}

type GetMyCocktailsSuccessActionType = {
  type: typeof GET_MY_COCKTAILS_SUCCESS
  data: Array<CocktailsType>
}

type GetMyCocktailsFailureActionType = {
  error: string
  type: typeof GET_MY_COCKTAILS_FAILURE
}

type GetPublishedCocktailsActionType = {
  type: typeof GET_PUBLISHED_COCKTAILS
}

type GetPublishedCocktailsSuccessActionType = {
  type: typeof GET_PUBLISHED_COCKTAILS_SUCCESS
  data: Array<CocktailsType>
}

type GetPublishedCocktailsFailureActionType = {
  error: string
  type: typeof GET_PUBLISHED_COCKTAILS_FAILURE
}

type DeleteCocktailActionType = {
  id: number
  type: typeof DELETE_COCKTAIL
}

type DeleteCocktailSuccessActionType = {
  type: typeof DELETE_COCKTAIL_SUCCESS
  data: CocktailsType
}

type DeleteCocktailFailureActionType = {
  error: string
  type: typeof DELETE_COCKTAIL_FAILURE
}

type PublishCocktailActionType = {
  id: number
  type: typeof PUBLISH_COCKTAIL
}

type PublishCocktailSuccessActionType = {
  type: typeof PUBLISH_COCKTAIL_SUCCESS
}

type PublishCocktailFailureActionType = {
  error: string
  type: typeof PUBLISH_COCKTAIL_FAILURE
}

export const createCocktail = (data: CocktailsType): CreateCocktailActionType => ({type: CREATE_COCKTAIL, data});
export const createCocktailSuccess = (): CreateCocktailSuccessActionType => ({type: CREATE_COCKTAIL_SUCCESS});
export const createCocktailFailure = (error: string): CreateCocktailFailureActionType => ({type: CREATE_COCKTAIL_FAILURE, error});

export const getCocktails = (): GetCocktailActionType => ({type: GET_COCKTAILS});
export const getCocktailsSuccess = (data: Array<CocktailsType>): GetCocktailSuccessActionType => ({type: GET_COCKTAILS_SUCCESS, data});
export const getCocktailsFailure = (error: string): GetCocktailFailureActionType => ({type: GET_COCKTAILS_FAILURE, error});

export const getMyCocktails = (): GetMyCocktailsActionType => ({type: GET_MY_COCKTAILS});
export const getMyCocktailsSuccess = (data: Array<CocktailsType>): GetMyCocktailsSuccessActionType => ({type: GET_MY_COCKTAILS_SUCCESS, data});
export const getMyCocktailsFailure = (error: string): GetMyCocktailsFailureActionType => ({type: GET_MY_COCKTAILS_FAILURE, error});

export const getPublishedCocktails = (): GetPublishedCocktailsActionType => ({type: GET_PUBLISHED_COCKTAILS});
export const getPublishedCocktailsSuccess = (data: Array<CocktailsType>): GetPublishedCocktailsSuccessActionType => ({type: GET_PUBLISHED_COCKTAILS_SUCCESS, data});
export const getPublishedCocktailsFailure = (error: string): GetPublishedCocktailsFailureActionType => ({type: GET_PUBLISHED_COCKTAILS_FAILURE, error});

export const deleteCocktail = (id: number): DeleteCocktailActionType => ({type: DELETE_COCKTAIL, id});
export const deleteCocktailSuccess = (data: CocktailsType): DeleteCocktailSuccessActionType => ({type: DELETE_COCKTAIL_SUCCESS, data});
export const deleteCocktailFailure = (error: string): DeleteCocktailFailureActionType => ({type: DELETE_COCKTAIL_FAILURE, error});

export const publishCocktail = (id: number): PublishCocktailActionType => ({type: PUBLISH_COCKTAIL, id});
export const publishCocktailSuccess = (): PublishCocktailSuccessActionType => ({type: PUBLISH_COCKTAIL_SUCCESS});
export const publishCocktailFailure = (error: string): PublishCocktailFailureActionType => ({type: PUBLISH_COCKTAIL_FAILURE, error});