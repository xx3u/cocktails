
import { put } from '@redux-saga/core/effects';
import { loginUserFailure, loginUserSuccess, logoutUserSuccess, registerUserFailure, registerUserSuccess } from '../actions/usersActions';
import api from './../../api';
import { NotificationManager } from 'react-notifications';
import { push } from 'connected-react-router';

export function* registerUserSaga({ userData }) {
  try {
    console.log('userData', userData)
    yield api.post('/users', userData);
    yield put(registerUserSuccess());
    yield NotificationManager.success('You successfully registered');
    yield put(push('/'));
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(registerUserFailure(error.response.data));
    } else {
      yield put(registerUserFailure(error))
    }
  }
};

export function* loginUserSaga({ userData }) {
  try {
    const response = yield api.post('/users/sessions', userData);
    yield put(loginUserSuccess(response.data));
    yield NotificationManager.success('Successful Login');
    yield put(push('/'));
  } catch(e) {
    yield put(loginUserFailure(e.response.data));
  }
};

export function* logoutUserSaga() {
  try {
      yield api.delete('/users/sessions');
      yield put(logoutUserSuccess());
      yield put(push('/'));
      yield NotificationManager.success('You successfully logout');
  } catch(e) {
      yield NotificationManager.error('Logout failed');
  }
}