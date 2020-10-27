export interface ILeaderboardData {
  data: ILeaderboardDataItem [];
}

export interface ILeaderboardDataItem {
  name: string;
  email: string;
  won: number;
  lost: number;
  wo: number;
  gamesTotal: number;
  winRatio: number;
}

export interface ILeaderboardResponseItem {
  name: string;
  email: string;
  playerStats: [{
    won: number;
    lost: number;
    wo: number;
    gamesTotal: number;
    winRatio: number;
  }]
}

export const LeaderboardActionTypes = {
  GET_LEADERBOARD_DATA_REQUESTED: 'GET_LEADERBOARD_DATA_REQUESTED',
  GET_LEADERBOARD_DATA_SUCCESS: 'GET_LEADERBOARD_DATA_SUCCESS',
  GET_LEADERBOARD_DATA_FAILURE: 'GET_LEADERBOARD_DATA_FAILURE',
};

interface ILeaderboardRequestAction {
  type: string;
  payload?: any;
}

interface ILeaderboardFailureAction {
  type: string;
  payload: { error: string }
}

interface ILeaderboardGetDataSuccess {
  type: string;
  payload: [];
}

export type ILeaderboardActionTypes =
  ILeaderboardRequestAction |
  ILeaderboardFailureAction |
  ILeaderboardGetDataSuccess;
