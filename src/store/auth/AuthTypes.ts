export interface IUser {
  name: string;
  _id: string;
  isAdmin?: boolean;
  email: string;
}
export interface IAuth {
  isAuthenticated: boolean;
  user: IUser;
}

export const AuthActionTypes = {
  LOGIN_USER_REQUESTED: 'LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',

  GET_CURRENT_USER_REQUESTED: 'GET_CURRENT_USER_REQUESTED',
  GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_FAILURE: 'GET_CURRENT_USER_FAILURE',

  SIGN_UP_USER_REQUESTED: 'SIGN_UP_USER_REQUESTED',
  SIGN_UP_USER_SUCCESS: 'SIGN_UP_USER_SUCCESS',
  SIGN_UP_USER_FAILURE: 'SIGN_UP_USER_FAILURE',

  SIGN_OUT_USER_SUCCESS: 'SIGN_OUT_USER_SUCCESS',
};

interface IAuthRequestAction {
  type: typeof AuthActionTypes.LOGIN_USER_REQUESTED;
  payload?: any;
}

interface IAuthFailureAction {
  type: typeof AuthActionTypes.LOGIN_USER_FAILURE;
  payload: { error: string };
}

export interface IAuthSuccessPayload {
  name: string;
  _id: string;
  isAdmin?: boolean;
  email: string;
  token: string;
}

interface IAuthLoginUserSuccessAction {
  type: string;
  payload: IAuthSuccessPayload;
}

export type IAuthActionTypes =
  | IAuthRequestAction
  | IAuthFailureAction
  | IAuthLoginUserSuccessAction;
