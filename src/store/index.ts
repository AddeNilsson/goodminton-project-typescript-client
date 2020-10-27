import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import { IApp } from './app/AppTypes';
import { IAuth } from './auth/AuthTypes';
import { IPlayer } from './player/PlayerTypes';
import { ILeaderboardData } from './leaderboard/LeaderboardTypes';
import { ILogs } from './logs/LogsTypes';

const enhancers = [];
const middleware = [
  thunk,
];

export interface IAppState {
  app: IApp;
  auth: IAuth;
  player: IPlayer,
  leaderboard: ILeaderboardData,
  logs: ILogs;
}

export interface IErrorPayload {
  error: string
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  composedEnhancers,
);

export default store;
