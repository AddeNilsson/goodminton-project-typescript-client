import { combineReducers } from 'redux';

/* Reducers */
import appReducer from './app/AppReducer';
import authReducer from './auth/AuthReducer';
import playerReducer from './player/PlayerReducer';
import leaderboardreducer from './leaderboard/LeaderboardReducer';
import logsReducer from './logs/LogsReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  player: playerReducer,
  leaderboard: leaderboardreducer,
  logs: logsReducer,
});
