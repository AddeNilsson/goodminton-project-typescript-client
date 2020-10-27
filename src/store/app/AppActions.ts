import { IAppActionTypes } from './AppTypes';

export const TOGGLE_LOADING = (): IAppActionTypes => ({
  type: 'APP_TOGGLE_LOADING',
});

export const removeWhenNextDefined = true;
