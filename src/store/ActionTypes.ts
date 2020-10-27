import { AuthActionTypes } from './auth/AuthTypes';
import { LogsActionTypes } from './logs/LogsTypes';
import { PlayerActionTypes } from './player/PlayerTypes';
import { LeaderboardActionTypes } from './leaderboard/LeaderboardTypes';
import { AppActionTypes } from './app/AppTypes';

const ActionTypes = {
  ...AuthActionTypes,
  ...LogsActionTypes,
  ...PlayerActionTypes,
  ...LeaderboardActionTypes,
  ...AppActionTypes,
};

export default ActionTypes;
