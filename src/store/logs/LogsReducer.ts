import initialState from '../initialState';
import {
  ILogs,
  ILogsActionType,
  ILogEntry,
  LogsActionTypes,
} from './LogsTypes';

const sortByCreated = (a: ILogEntry, b: ILogEntry) => (
  a.created < b.created ? 1 : a.created > b.created ? -1 : 0
);

/* eslint-disable @typescript-eslint/indent */ /* Due to issue */

export default (state = initialState.logs, action: ILogsActionType): ILogs => {
  switch (action.type) {
    case LogsActionTypes.GET_PLAYER_LOGS_REQUESTED:
    case LogsActionTypes.UPDATE_LOG_ENTRY_REQUESTED: {
      return {
        ...state,
        loading: state.loading + 1,
        isLoading: (state.loading + 1) > 0,
      };
    }
    case LogsActionTypes.GET_PLAYER_LOGS_SUCCESS: {
      const logs = (action.payload as ILogEntry []);
      const sorted = logs.sort(sortByCreated);
      return {
        ...state,
        playerLogs: sorted,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }
    case LogsActionTypes.UPDATE_LOG_ENTRY_SUCCESS: {
      const sorted = [
        (action.payload as ILogEntry),
        ...state.playerLogs,
      ].sort(sortByCreated);

      return {
        ...state,
        playerLogs: sorted,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }
    case LogsActionTypes.GET_PLAYER_LOGS_FAILURE:
    case LogsActionTypes.UPDATE_LOG_ENTRY_FAILURE: {
      const errors = [...state.errors, (action.payload as { error: string })];
      return {
        ...state,
        errors,
        loading: state.loading - 1,
        isLoading: (state.loading - 1) > 0,
      };
    }
    case 'SIGN_OUT_USER_SUCCESS': // TODO: fix this..
      return initialState.logs;
    default: return state;
  }
};
