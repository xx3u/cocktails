import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from "../actionTypes";

const initialState = {
  user: null,
  registerError: null,
  loginError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {...state, registerError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.data, loginError: null};
    case LOGIN_USER_FAILURE:
      return {...state, loginError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    default:
      return state;
  }
};

export default usersReducer;