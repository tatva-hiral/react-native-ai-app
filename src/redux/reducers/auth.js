import {authActionsType} from '../actionTypes';

// initial State
const initialState = {
  userList: [],
  userDetail: null,
  loader: false,
};

/**
 * auth reducer
 * @param {*} state
 * @param {*} action
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionsType.POST_LOGIN_REQUEST: {
      return {
        ...state,
        loader: true,
      };
    }
    case authActionsType.SET_USER_DATA: {
      return {
        ...state,
        userList: action.payload,
        loader: false,
      };
    }
    case authActionsType.SET_USER_DETAIL: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
