import initialState from '../initialState';
import {
  PlayerActionTypes,
  IPlayer,
  IPlayerActionTypes,
  IPlayerData,
} from './PlayerTypes';

/* eslint-disable @typescript-eslint/indent */ /* Due to issue */

export default (state = initialState.player, action: IPlayerActionTypes): IPlayer => {
  switch (action.type) {
    case PlayerActionTypes.GET_PLAYER_STATS_SUCCESS: {
      return {
        ...state,
        stats: (action.payload as IPlayerData),
      };
    }
    case PlayerActionTypes.UPDATE_PLAYER_STATS_SUCCESS: {
      return {
        ...state,
        stats: (action.payload as IPlayerData),
      };
    }
    case 'SIGN_OUT_USER_SUCCESS': // TODO
      return initialState.player;
    default: return state;
  }
};
