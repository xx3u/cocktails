
import { 
  REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
  LOGOUT_USER, LOGOUT_USER_SUCCESS 
} from '../actionTypes';
import { UserType } from '../reducers/usersReducer';

type RegisterUserActionType = {
  type: typeof REGISTER_USER
  userData: UserType
}

type RegisterUserSuccessActionType = {
  type: typeof REGISTER_USER_SUCCESS
}

type RegisterUserFailureActionType = {
  type: typeof REGISTER_USER_FAILURE
  error: string
}

type LoginUserActionType = {
  type: typeof LOGIN_USER
  userData: UserType
}

type LoginUserSuccessActionType = {
  type: typeof LOGIN_USER_SUCCESS
  data: UserType
}

type LoginUserFailureActionType = {
  type: typeof LOGIN_USER_FAILURE
  error: string
}

type LogoutUserActionType = {
  type: typeof LOGOUT_USER
}

type LogoutUserSuccessActionType = {
  type: typeof LOGOUT_USER_SUCCESS
}

export const registerUser = (userData: UserType): RegisterUserActionType => ({type: REGISTER_USER, userData});
export const registerUserSuccess = (): RegisterUserSuccessActionType => ({type: REGISTER_USER_SUCCESS});
export const registerUserFailure = (error: string): RegisterUserFailureActionType => ({type: REGISTER_USER_FAILURE, error});

export const loginUser = (userData: UserType): LoginUserActionType => ({type: LOGIN_USER, userData});
export const loginUserSuccess = (data: UserType): LoginUserSuccessActionType => ({type: LOGIN_USER_SUCCESS, data});
export const loginUserFailure = (error: string): LoginUserFailureActionType => ({type: LOGIN_USER_FAILURE, error});

export const logoutUser = (): LogoutUserActionType => ({type: LOGOUT_USER});
export const logoutUserSuccess = (): LogoutUserSuccessActionType => ({type: LOGOUT_USER_SUCCESS});