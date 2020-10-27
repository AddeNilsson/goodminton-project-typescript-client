export interface IApp {
  isLoading: boolean,
  loading: number,
  errors: { error: string } [],
}

export const AppActionTypes = {
  toggleLoading: 'APP_TOGGLE_LOADING',
};

interface IAppToggleLoading {
  type: 'APP_TOGGLE_LOADING',
  payload?: any;
}
// interface IAppRequestAction {
//   type: string
//   payload?: void;
// }

export interface IAppFailurePayload {
  error: string;
}

interface IAppFailureAction {
  type: string;
  payload: IAppFailurePayload;
}

export type IAppActionTypes =
  IAppToggleLoading |
  IAppFailureAction;
  // IAppRequestAction |
