import initialState from '../initialState';
import ActionTypes from '../ActionTypes';
import {
  IAppFailurePayload,
  IAppActionTypes,
  IApp,
} from './AppTypes';

/* eslint-disable @typescript-eslint/indent */ /* Due to issue */

export default (state = initialState.app, action: IAppActionTypes): IApp => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_REQUESTED:
    case ActionTypes.GET_CURRENT_USER_REQUESTED:
    case ActionTypes.SIGN_UP_USER_REQUESTED:
    case ActionTypes.GET_PLAYER_STATS_REQUESTED:
    case ActionTypes.GET_LEADERBOARD_DATA_REQUESTED:
    case ActionTypes.UPDATE_PLAYER_STATS_REQUESTED:
      return {
        ...state,
        loading: state.loading + 1,
        isLoading: (state.loading + 1) > 0,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
    case ActionTypes.GET_CURRENT_USER_SUCCESS:
    case ActionTypes.SIGN_UP_USER_SUCCESS:
    case ActionTypes.GET_PLAYER_STATS_SUCCESS:
    case ActionTypes.GET_LEADERBOARD_DATA_SUCCESS:
    case ActionTypes.UPDATE_PLAYER_STATS_SUCCESS:
      return {
        ...state,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
    case ActionTypes.GET_CURRENT_USER_FAILURE:
    case ActionTypes.SIGN_UP_USER_FAILURE:
    case ActionTypes.GET_PLAYER_STATS_FAILURE:
    case ActionTypes.GET_LEADERBOARD_DATA_FAILURE:
    case ActionTypes.UPDATE_PLAYER_STATS_FAILURE: {
      const errors = [...state.errors, (action.payload as IAppFailurePayload)];
      return {
        ...state,
        errors,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }
    default:
      return state;
  }
};
