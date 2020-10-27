import request from '../helpers/request';
import { ILeaderboardResponseItem } from '../store/leaderboard/LeaderboardTypes';

export const getLeaderboardDataRequest = (): Promise<ILeaderboardResponseItem []> => (
  request<ILeaderboardResponseItem []>('/leaderboards', {
    method: 'GET',
  })
    .then((data: ILeaderboardResponseItem []) => data)
    .catch((error) => { throw error; })
);

export const removeWhenNextDefined = true;
