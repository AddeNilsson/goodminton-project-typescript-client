import React, { FunctionComponent, useEffect } from 'react';
import { AnyAction } from 'redux';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { ILogEntry } from '../store/logs/LogsTypes';
import { IAppState } from '../store';
import LogsList from './LogsList';
import {
  getPlayerLogs as getPlayerLogsAction,
  revertStatsByLogEntry as revertStatsByLogEntryAction,
} from '../store/logs/LogsActions';

interface ILogsContainerStateToProps {
  logs: ILogEntry [];
  isLoading: boolean;
}

interface ILogsContainerOwnProps {}

interface ILogsContainerDispatchToProps {
  getPlayerLogs: () => void;
  revertStatsByLogEntry: (entry: ILogEntry) => void;
}

const LogsContainer: FunctionComponent<
  ILogsContainerDispatchToProps & ILogsContainerOwnProps & ILogsContainerStateToProps
> = ({
  getPlayerLogs,
  logs,
  isLoading,
  revertStatsByLogEntry,
}) => {
  useEffect(() => {
    getPlayerLogs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LogsList
      logs={logs}
      isLoading={isLoading}
      handleRevert={revertStatsByLogEntry}
    />
  );
};

const mapStateToProps: MapStateToProps<
  ILogsContainerStateToProps,
  ILogsContainerOwnProps,
  IAppState
> = (state: IAppState) => ({
  logs: state.logs.playerLogs,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps: MapDispatchToProps<
  ILogsContainerDispatchToProps,
  ILogsContainerOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  getPlayerLogs: () => dispatch(getPlayerLogsAction()),
  revertStatsByLogEntry: (entry: ILogEntry) => dispatch(revertStatsByLogEntryAction(entry)),
});

export default connect<
  ILogsContainerStateToProps,
  ILogsContainerDispatchToProps,
  ILogsContainerOwnProps,
  IAppState
>(mapStateToProps, mapDispatchToProps)(LogsContainer);
