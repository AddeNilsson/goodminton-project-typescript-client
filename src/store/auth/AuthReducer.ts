import initialState from '../initialState';
import {
  AuthActionTypes,
  IAuthActionTypes,
  IAuth,
  IAuthSuccessPayload,
  IUser,
} from './AuthTypes';

/* eslint-disable @typescript-eslint/indent */ /* Due to issue */

export default (state = initialState.auth, action: IAuthActionTypes): IAuth => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER_SUCCESS: {
      const {
        email, name, _id: id, token,
      } = (action.payload as IAuthSuccessPayload);
      localStorage.setItem('jwt', token);
        return {
          ...state,
          isAuthenticated: true,
          user: { email, name, _id: id },
        };
      }
      case AuthActionTypes.GET_CURRENT_USER_SUCCESS: {
        return {
          ...state,
          user: (action.payload as IUser),
          isAuthenticated: true,
        };
      }
      case AuthActionTypes.SIGN_OUT_USER_SUCCESS: {
        localStorage.removeItem('jwt');
        return {
          ...state,
          user: initialState.auth.user,
          isAuthenticated: false,
        };
      }
      case AuthActionTypes.SIGN_UP_USER_SUCCESS: {
        const { token, ...user } = (action.payload as IAuthSuccessPayload);
        localStorage.setItem('jwt', token);
        return {
          ...state,
          isAuthenticated: true,
          user,
        };
      }
    default:
      return state;
  }
};
