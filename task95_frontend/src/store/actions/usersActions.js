
import { 
  REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
  LOGOUT_USER, LOGOUT_USER_SUCCESS 
} from './../actionTypes';

export const registerUser = (userData) => ({type: REGISTER_USER, userData});
export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = (error) => ({type: REGISTER_USER_FAILURE, error});

export const loginUser = (userData) => ({type: LOGIN_USER, userData});
export const loginUserSuccess = (data) => ({type: LOGIN_USER_SUCCESS, data});
export const loginUserFailure = (error) => ({type: LOGIN_USER_FAILURE, error});

export const logoutUser = () => ({type: LOGOUT_USER});
export const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});