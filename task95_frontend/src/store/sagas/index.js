import { takeEvery } from 'redux-saga/effects';
import { 
  CREATE_COCKTAIL, DELETE_COCKTAIL, PUBLISH_COCKTAIL, 
  GET_COCKTAILS, GET_MY_COCKTAILS,
  GET_PUBLISHED_COCKTAILS,
  LOGIN_USER, LOGOUT_USER, REGISTER_USER 
} from './../actionTypes';
import { 
  createCocktailSaga, deleteCocktailSaga, 
  getCocktailsSaga, getMyCocktailsSaga, 
  getPublishedCocktailsSaga, publishCocktailSaga 
} from './cocktailsSaga';
import { loginUserSaga, logoutUserSaga, registerUserSaga } from './usersSaga';

export function* rootSaga() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);

  yield takeEvery(CREATE_COCKTAIL, createCocktailSaga);
  yield takeEvery(GET_COCKTAILS, getCocktailsSaga);
  yield takeEvery(GET_MY_COCKTAILS, getMyCocktailsSaga);
  yield takeEvery(GET_PUBLISHED_COCKTAILS, getPublishedCocktailsSaga);
  yield takeEvery(DELETE_COCKTAIL, deleteCocktailSaga);
  yield takeEvery(PUBLISH_COCKTAIL, publishCocktailSaga);
}