import request from '../helpers/request';
import {
  IPlayerData,
  IRegisterGamePayload,
} from '../store/player/PlayerTypes';

export const updatePlayerStatsRequest = (
  { payload, id }: { payload: IRegisterGamePayload, id: string },
): Promise<IPlayerData> => (
  request<IPlayerData>(`/stats/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => data)
    .catch((error) => { throw (error); })
);

export const getPlayerStatsRequest = ({ id }: { id: string }): Promise<IPlayerData> => (
  request<IPlayerData>(`/stats/${id}`, {
    method: 'GET',
  })
    .then((data) => data)
    .catch((error) => { throw (error); })
);
