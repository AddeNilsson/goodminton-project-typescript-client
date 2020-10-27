import request from '../helpers/request';
import { IUser } from '../store/auth/AuthTypes';

export const loginUserRequest = (payload: { email: string, password: string}): Promise<IUser> => (
  request<IUser>('/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data: IUser) => data)
    .catch((error) => { throw (error); })
);

export const getCurrentUserRequest = (): Promise<IUser> => (
  request<IUser>('/users/current', {
    method: 'GET',
  })
    .then((data) => data)
    .catch((error) => { throw (error); })
);

export const signUpUserRequest = (payload: { name: string, password: string, email: string })
:Promise<IUser> => (
  request<IUser>('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => data)
    .catch((error) => { throw (error); })
);
