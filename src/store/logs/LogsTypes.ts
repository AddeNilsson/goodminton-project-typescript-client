export interface ILogs {
  isLoading: boolean;
  loading: number;
  playerLogs: ILogEntry [];
  errors: { error: string } [];
}

export interface ILogEntry {
  _id: string,
  regWon: number;
  regLost: number;
  regWalkOvers: number;
  regGamesTotal: number;
  reverted: boolean;
  touched: string;
  created: number;
}

export const LogsActionTypes = {
  GET_PLAYER_LOGS_REQUESTED: 'GET_PLAYER_LOGS_REQUESTED',
  GET_PLAYER_LOGS_SUCCESS: 'GET_PLAYER_LOGS_SUCCESS',
  GET_PLAYER_LOGS_FAILURE: 'GET_PLAYER_LOGS_FAILURE',

  UPDATE_LOG_ENTRY_REQUESTED: 'UPDATE_LOG_ENTRY_REQUESTED',
  UPDATE_LOG_ENTRY_SUCCESS: 'UPDATE_LOG_ENTRY_SUCCESS',
  UPDATE_LOG_ENTRY_FAILURE: 'UPDATE_LOG_ENTRY_FAILURE',
};

interface ILogsRequestAction {
  type: string;
  payload?: any;
}

interface ILogsFailureAction {
  type: string;
  payload: { error: string };
}

interface ILogsSuccessAction {
  type: string;
  payload: ILogEntry [];
}

export type ILogsActionType =
  ILogsRequestAction |
  ILogsFailureAction |
  ILogsSuccessAction;
