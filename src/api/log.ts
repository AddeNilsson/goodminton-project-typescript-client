import request from '../helpers/request';
import { ILogEntry } from '../store/logs/LogsTypes';

export const getPlayerLogsRequest = ({ id }: { id: string }): Promise<ILogEntry []> => (
  request<ILogEntry []>(`/logs/${id}`, {
    method: 'GET',
  })
    .then((data) => data)
    .catch((error) => { throw error; })
);

export const updateLogEntryRequest = ({ userId, logId }: { userId: string, logId: string })
: Promise<ILogEntry> => (
  request<ILogEntry>(`/logs/${userId}/${logId}`, {
    method: 'PUT',
  })
    .then((data) => data)
    .catch((error) => { throw error; })
);
