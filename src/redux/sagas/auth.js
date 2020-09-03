import {put, takeLatest} from 'redux-saga/effects';
import {authActionsType} from '../actionTypes';
import * as AuthAction from '../actions/auth';
import {postLoginRequest} from '../../services/authService';
// import * as NavigationService from "../services/navigationService";

/**
 * watcher
 */
function* postLoginWatcher() {
  yield takeLatest(authActionsType.POST_LOGIN_REQUEST, postLoginHandler);
}

/**
 * handler
 * @param value
 */
function* postLoginHandler(value) {
  try {
    const url = endpoint.API_URL + value.payload;
    const response = yield postLoginRequest(url, '');
    if (response.success) {
      yield put(AuthAction.setUserData(response.data));
    }
  } catch (error) {
    console.log('postLoginHandler error', error);
  }
}

export default [postLoginWatcher];
