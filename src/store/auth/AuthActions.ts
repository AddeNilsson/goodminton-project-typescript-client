/* eslint-disable max-len */
import { ThunkDispatch } from 'redux-thunk';
import { IAuthActionTypes, IUser, AuthActionTypes } from './AuthTypes';
import { IErrorPayload } from '..';
import {
  loginUserRequest,
  getCurrentUserRequest,
  signUpUserRequest,
} from '../../api';

export const loginUser = (payload: { email: string, password: string}) => (
  (dispatch: ThunkDispatch<unknown, unknown, IAuthActionTypes>): Promise<void | IAuthActionTypes> => {
    dispatch(loginUserRequested());

    return loginUserRequest(payload)
      .then((data: IUser) => dispatch(loginUserSuccess(data)))
      .catch((error: IErrorPayload) => dispatch(loginUserFailure(error)));
  }
);

const loginUserRequested = (): IAuthActionTypes => ({
  type: AuthActionTypes.LOGIN_USER_REQUESTED,
});

const loginUserSuccess = (data: IUser): IAuthActionTypes => ({
  type: AuthActionTypes.LOGIN_USER_SUCCESS,
  payload: data,
});

const loginUserFailure = (error: IErrorPayload) => ({
  type: AuthActionTypes.LOGIN_USER_FAILURE,
  payload: error,
});

export const getCurrentUser = () => (
  (dispatch: ThunkDispatch<unknown, unknown, IAuthActionTypes>): Promise<void | IAuthActionTypes> => {
    dispatch(getCurrentUserRequested());
    return getCurrentUserRequest()
      .then((data: IUser) => dispatch(getCurrentUserSuccess(data)))
      .catch((error: IErrorPayload) => dispatch(getCurrentUserFailure(error)));
  }
);

const getCurrentUserRequested = (): IAuthActionTypes => ({
  type: AuthActionTypes.GET_CURRENT_USER_REQUESTED,
});

const getCurrentUserSuccess = (data: IUser): IAuthActionTypes => ({
  type: AuthActionTypes.GET_CURRENT_USER_SUCCESS,
  payload: data,
});

const getCurrentUserFailure = (error: IErrorPayload): IAuthActionTypes => ({
  type: AuthActionTypes.GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const signUpUser = (payload: { name: string, email: string, password: string}) => (
  (dispatch: ThunkDispatch<unknown, unknown, IAuthActionTypes>): Promise<void | IAuthActionTypes> => {
    dispatch(signUpUserRequested());
    return signUpUserRequest(payload)
      .then((data) => dispatch(signUpUserSuccess(data)))
      .catch((error: IErrorPayload) => dispatch(signUpUserFailure(error)));
  }
);

const signUpUserRequested = (): IAuthActionTypes => ({
  type: AuthActionTypes.SIGN_UP_USER_REQUESTED,
});

const signUpUserSuccess = (data: IUser): IAuthActionTypes => ({
  type: AuthActionTypes.SIGN_UP_USER_SUCCESS,
  payload: data,
});

const signUpUserFailure = (error: IErrorPayload): IAuthActionTypes => ({
  type: AuthActionTypes.SIGN_UP_USER_FAILURE,
  payload: error,
});

export const signOutUser = (): IAuthActionTypes => ({
  type: AuthActionTypes.SIGN_OUT_USER_SUCCESS,
});
