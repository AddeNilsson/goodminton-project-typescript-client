/* eslint-disable max-len */
import { ThunkDispatch } from 'redux-thunk';
import { getLeaderboardDataRequest } from '../../api';
import {
  ILeaderboardActionTypes,
  ILeaderboardResponseItem,
  LeaderboardActionTypes,
} from './LeaderboardTypes';
import { IErrorPayload } from '..';

export const getLeaderboardData = () => (
  (dispatch: ThunkDispatch<unknown, unknown, ILeaderboardActionTypes>): Promise<void | ILeaderboardActionTypes> => {
    dispatch(getLeaderboardDataRequested());
    return getLeaderboardDataRequest()
      .then((data: ILeaderboardResponseItem []) => dispatch(getLeaderboardDataSuccess(data)))
      .catch((error: IErrorPayload) => {
        console.error(error);
        dispatch(getLeaderboardDataFailure(error));
      });
  }
);

const getLeaderboardDataRequested = () => ({
  type: LeaderboardActionTypes.GET_LEADERBOARD_DATA_REQUESTED,
});

const getLeaderboardDataSuccess = (data: ILeaderboardResponseItem []) => ({
  type: LeaderboardActionTypes.GET_LEADERBOARD_DATA_SUCCESS,
  payload: data,
});

const getLeaderboardDataFailure = (error: IErrorPayload) => ({
  type: LeaderboardActionTypes.GET_LEADERBOARD_DATA_FAILURE,
  payload: error,
});

export const removeWhenNextDefined = true;
