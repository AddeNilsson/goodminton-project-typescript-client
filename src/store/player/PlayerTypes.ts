export interface IPlayer {
  stats: IPlayerData;
}

export interface IPlayerData {
  won: number;
  lost: number;
  walkOvers: number;
  gamesTotal: number;
  winRatio: number;
  touched: number;
}

export interface IRegisterGamePayload {
  won: number;
  lost: number;
  walkOvers: number;
  revert: boolean;
}

export const PlayerActionTypes = {
  GET_PLAYER_STATS_REQUESTED: 'GET_PLAYER_STATS_REQUESTED',
  GET_PLAYER_STATS_SUCCESS: 'GET_PLAYER_STATS_SUCCESS',
  GET_PLAYER_STATS_FAILURE: 'GET_PLAYER_STATS_FAILURE',

  UPDATE_PLAYER_STATS_REQUESTED: 'UPDATE_PLAYER_STATS_REQUESTED',
  UPDATE_PLAYER_STATS_SUCCESS: 'UPDATE_PLAYER_STATS_SUCCESS',
  UPDATE_PLAYER_STATS_FAILURE: 'UPDATE_PLAYER_STATS_FAILURE',
};

interface IPlayerRequestAction {
  type: string;
  payload?: any;
}

interface IPlayerFailureAction {
  type: string;
  payload: { error: string };
}

interface IPlayerGetStatsSuccessAction {
  type: string;
  payload: IPlayerData;
}

interface IPlayerUpdateStatsSuccessAction {
  type: string;
  payload: IPlayerData;
}

export type IPlayerActionTypes =
  IPlayerRequestAction |
  IPlayerFailureAction |
  IPlayerGetStatsSuccessAction |
  IPlayerUpdateStatsSuccessAction;

// interface IPlayerRequestAction {
//   type: 'GET_PLAYER_STATS_REQUESTED';
// }

// interface IPlayerFailureAction {
//   type: 'GET_PLAYER_STATS_FAILURE';
//   payload: { error: string };
// }

// interface IPlayerGetStatsSuccessAction {
//   type: 'GET_PLAYER_STATS_SUCCESS';
//   payload: IPlayerData;
// }

// interface IPlayerUpdateRequestAction {
//   type: 'UPDATE_PLAYER_STATS_REQUESTED';
// }

// interface IPlayerUpdateFailureAction {
//   type: 'UPDATE_PLAYER_STATS_FAILURE';
//   payload: { error: string };
// }

// interface IPlayerUpdateStatsSuccessAction {
//   type: 'UPDATE_PLAYER_STATS_SUCCESS';
//   payload: IPlayerData;
// }

// export type IPlayerActionTypes =
//   IPlayerRequestAction |
//   IPlayerFailureAction |
//   IPlayerGetStatsSuccessAction |
//   IPlayerUpdateStatsSuccessAction |
//   IPlayerUpdateRequestAction |
//   IPlayerUpdateFailureAction;
