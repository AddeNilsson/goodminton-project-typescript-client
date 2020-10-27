/* eslint-disable max-len */
import { ThunkDispatch } from 'redux-thunk';
import { IErrorPayload } from '..';

import {
  getPlayerStatsRequest,
  updatePlayerStatsRequest,
} from '../../api';
import {
  IPlayerActionTypes,
  IPlayerData,
  PlayerActionTypes,
  IRegisterGamePayload,
} from './PlayerTypes';

export const getPlayerStats = (payload: { id: string }) => (
  (dispatch: ThunkDispatch<unknown, unknown, IPlayerActionTypes>): Promise<void | IPlayerActionTypes> => {
    dispatch(getPlayerStatsRequested());
    return getPlayerStatsRequest(payload)
      .then((data: IPlayerData) => dispatch(getPlayerStatsSuccess(data)))
      .catch((error: IErrorPayload) => {
        console.error(error);
        dispatch(getPlayerStatsFailure(error));
      });
  }
);

const getPlayerStatsRequested = () => ({
  type: PlayerActionTypes.GET_PLAYER_STATS_REQUESTED,
});

const getPlayerStatsSuccess = (data: IPlayerData) => ({
  type: PlayerActionTypes.GET_PLAYER_STATS_SUCCESS,
  payload: data,
});

const getPlayerStatsFailure = (error: IErrorPayload) => ({
  type: PlayerActionTypes.GET_PLAYER_STATS_FAILURE,
  payload: error,
});

export const updatePlayerStats = (payload: IRegisterGamePayload) => (
  (dispatch: ThunkDispatch<unknown, unknown, IPlayerActionTypes>, getState: any): Promise<void | IPlayerActionTypes> => {
    const { auth: { user: { _id: id } } } = getState();
    dispatch(updatePlayerStatsRequested());
    return updatePlayerStatsRequest({ payload, id })
      .then((data: IPlayerData) => dispatch(updatePlayerStatsSuccess(data)))
      .catch((error: IErrorPayload) => {
        console.error(error);
        dispatch(updatePlayerStatsFailure(error));
      });
  }
);

const updatePlayerStatsRequested = () => ({
  type: PlayerActionTypes.UPDATE_PLAYER_STATS_REQUESTED,
});

const updatePlayerStatsSuccess = (data: IPlayerData) => ({
  type: PlayerActionTypes.UPDATE_PLAYER_STATS_SUCCESS,
  payload: data,
});

const updatePlayerStatsFailure = (error: IErrorPayload) => ({
  type: PlayerActionTypes.UPDATE_PLAYER_STATS_FAILURE,
  payload: error,
});
