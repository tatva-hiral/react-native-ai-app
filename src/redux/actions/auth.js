import {authActionsType} from '../actionTypes';

// ;ogin
export const postLoginAction = (postData) => ({
  type: authActionsType.POST_LOGIN_REQUEST,
  payload: postData,
});

// user response
export const setUserData = (data) => ({
  type: authActionsType.SET_USER_DATA,
  payload: data,
});

// user details
export const setUserDetailsData = (detail) => ({
  type: authActionsType.SET_USER_DETAIL,
  payload: detail,
});
