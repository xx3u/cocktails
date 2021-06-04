import api from './../../api';
import { NotificationManager } from 'react-notifications';
import { push } from 'connected-react-router';
import { put } from '@redux-saga/core/effects';
import { 
  createCocktailFailure, createCocktailSuccess, 
  getCocktailsSuccess, getCocktailsFailure,
  getMyCocktailsSuccess, getMyCocktailsFailure, 
  getPublishedCocktailsSuccess, getPublishedCocktailsFailure, deleteCocktailSuccess, deleteCocktailFailure, publishCocktailSuccess, publishCocktailFailure
} from '../actions/cocktailsActions';

export function* createCocktailSaga({ data }) {
  try {
    yield api.post('/cocktails', data);
    yield put(createCocktailSuccess());
    yield NotificationManager.success('Ваш коктейль находится на рассмотрении модератора');
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
    yield put(getMyCocktailsSuccess(response.data));
  } catch (error) {
    yield put(getMyCocktailsFailure(error)); 
  }
};

export function* getPublishedCocktailsSaga() {
  try {
    const response = yield api.get('/cocktails/published');
    yield put(getPublishedCocktailsSuccess(response.data));
  } catch (error) {
    yield put(getPublishedCocktailsFailure(error));
  }
};

export function* deleteCocktailSaga({id}) {
  try {
    const response = yield api.delete(`/cocktails/${id}`);
    yield put(deleteCocktailSuccess(response.data));
    yield NotificationManager.success('Коктейль успешно удален');
    yield put(push('/'));
  } catch (error) {
    yield put(deleteCocktailFailure(error));
  }
};

export function* publishCocktailSaga({id}) {
  try {
    const response = yield api.put(`/cocktails/${id}`);
    yield put(publishCocktailSuccess(response.data));
    yield put(push('/'));
  } catch (error) {
    yield put(publishCocktailFailure(error));
  }
};