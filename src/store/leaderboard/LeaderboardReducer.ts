import initialState from '../initialState';
import {
  LeaderboardActionTypes,
  ILeaderboardData,
  ILeaderboardActionTypes,
  ILeaderboardDataItem,
  ILeaderboardResponseItem,
} from './LeaderboardTypes';

/* eslint-disable @typescript-eslint/indent */ /* Due to issue */

const sortByRatio = (a: ILeaderboardDataItem, b: ILeaderboardDataItem) => (
  a.winRatio > b.winRatio ? -1 : a.winRatio < b.winRatio ? 1 : 0
);

// eslint-disable-next-line max-len
export default (state = initialState.leaderboard, action: ILeaderboardActionTypes): ILeaderboardData => {
  switch (action.type) {
    case LeaderboardActionTypes.GET_LEADERBOARD_DATA_SUCCESS: {
      const playersData = (action.payload as ILeaderboardResponseItem []);
      const normalized = playersData.map((p: ILeaderboardResponseItem) => ({
        name: p.name,
        email: p.email,
        ...p.playerStats[0],
      }));
      const sorted = normalized.sort(sortByRatio);
      return {
        ...state,
        data: sorted,
      };
    }
    case 'SIGN_OUT_USER_SUCCESS': // TODO: Fix..
      return initialState.leaderboard;
    default: return state;
  }
};
