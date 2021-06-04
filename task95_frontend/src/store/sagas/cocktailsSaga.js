import api from './../../api';
import { NotificationManager } from 'react-notifications';
import { push } from 'connected-react-router';
import { put } from '@redux-saga/core/effects';
import { 
  createCocktailFailure, createCocktailSuccess, 
  getCocktailsSuccess, getCocktailsFailure,
  getMyCocktailsSuccess, getMyCocktailsFailure
} from '../actions/cocktailsActions';

export function* createCocktailSaga({ data }) {
  try {
    yield api.post('/cocktails', data);
    yield put(createCocktailSuccess());
    yield NotificationManager.success('You successfully created new cocktail');
    yield put(push('/mycocktails'));
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(createCocktailFailure(error.response.data));
    } else {
      yield put(createCocktailFailure(error))
    }
  }
};

export function* getCocktailsSaga() {
  try {
    const response = yield api.get('/cocktails');
    yield put(getCocktailsSuccess(response.data));
  } catch (error) {
    yield put(getCocktailsFailure(error)); 
  }
};

export function* getMyCocktailsSaga() {
  try {
    const response = yield api.get('/cocktails/my');
    console.log('response.data', response.data)
    yield put(getMyCocktailsSuccess(response.data));
  } catch (error) {
    yield put(getMyCocktailsFailure(error)); 
  }
}