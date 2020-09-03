import {api} from './apiService';
import {endpoint} from '../constants';

export async function authRequest(urlParam, params) {
  const headers = {
    'Content-Type': 'application/json',
  };
  return api(urlParam, params, 'GET', headers);
}
