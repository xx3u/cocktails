import { takeEvery } from 'redux-saga/effects';
import { 
  CREATE_COCKTAIL, 
  GET_COCKTAILS, GET_MY_COCKTAILS,
  LOGIN_USER, LOGOUT_USER, REGISTER_USER 
} from './../actionTypes';
import { createCocktailSaga, getCocktailsSaga, getMyCocktailsSaga } from './cocktailsSaga';
import { loginUserSaga, logoutUserSaga, registerUserSaga } from './usersSaga';

export function* rootSaga() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);

  yield takeEvery(CREATE_COCKTAIL, createCocktailSaga);
  yield takeEvery(GET_COCKTAILS, getCocktailsSaga);
  yield takeEvery(GET_MY_COCKTAILS, getMyCocktailsSaga);
}