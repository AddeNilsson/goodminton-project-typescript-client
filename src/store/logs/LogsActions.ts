/* eslint-disable max-len */
import { ThunkDispatch } from 'redux-thunk';
import { LogsActionTypes, ILogsActionType, ILogEntry } from './LogsTypes';
import { updatePlayerStats } from '../player/PlayerActions';
import { IErrorPayload } from '..';
import {
  getPlayerLogsRequest,
  updateLogEntryRequest,
} from '../../api';

export const getPlayerLogs = () => (
  (dispatch: ThunkDispatch<unknown, unknown, ILogsActionType>, getState: any): Promise<void | ILogsActionType> => {
    const { auth: { user: { _id: id } } } = getState();
    dispatch(getPlayerLogsRequested());
    return getPlayerLogsRequest({ id })
      .then((data: ILogEntry []) => dispatch(getPlayerLogsSuccess(data)))
      .catch((error: IErrorPayload) => {
        console.error(error);
        dispatch(getPlayerLogsFailure(error));
      });
  }
);

const getPlayerLogsRequested = () => ({
  type: LogsActionTypes.GET_PLAYER_LOGS_REQUESTED,
});

const getPlayerLogsSuccess = (data: ILogEntry []) => ({
  type: LogsActionTypes.GET_PLAYER_LOGS_SUCCESS,
  payload: data,
});

const getPlayerLogsFailure = (error: IErrorPayload) => ({
  type: LogsActionTypes.GET_PLAYER_LOGS_FAILURE,
  payload: error,
});

export const revertStatsByLogEntry = (entry: ILogEntry) => (
  (dispatch: ThunkDispatch<unknown, unknown, ILogsActionType>, getState: any): Promise<void | ILogsActionType> => {
    const { auth: { user: { _id: id } } } = getState();
    const payload = {
      won: entry.regWon,
      lost: entry.regLost,
      walkOvers: entry.regWalkOvers,
      revert: true,
    };
    dispatch(updateLogEntryRequested());
    dispatch(updatePlayerStats(payload)); // revert stats data for player
    return updateLogEntryRequest({ userId: id, logId: entry._id })
      .then((data: ILogEntry) => dispatch(updateLogEntrySuccess(data)))
      .catch((error: IErrorPayload) => {
        console.error(error);
        dispatch(updateLogEntryFailure(error));
      });
  }
);

const updateLogEntryRequested = () => ({
  type: LogsActionTypes.UPDATE_LOG_ENTRY_REQUESTED,
});

const updateLogEntrySuccess = (data: ILogEntry) => ({
  type: LogsActionTypes.UPDATE_LOG_ENTRY_SUCCESS,
  payload: data,
});

const updateLogEntryFailure = (error: IErrorPayload) => ({
  type: LogsActionTypes.UPDATE_LOG_ENTRY_FAILURE,
  payload: error,
});
