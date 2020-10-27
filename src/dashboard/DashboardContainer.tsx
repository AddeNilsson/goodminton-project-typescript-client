import React, { useEffect } from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';
import { IAppState } from '../store';
import { IUser } from '../store/auth/AuthTypes';
import { IRegisterGamePayload, IPlayerData } from '../store/player/PlayerTypes';

import {
  getPlayerStats as getPlayerStatsAction,
  updatePlayerStats as updatePlayerStatsAction,
} from '../store/player/PlayerActions';

import Dashboard from './Dashboard';

interface IDashboardContainerDispatchToProps {
  getPlayerStats: (payload: { id: string }) => void;
  updatePlayerStats: (payload: IRegisterGamePayload) => void;
}

interface IDashboardContainerOwnProps extends RouteComponentProps {}

interface IDashboardContainerStateToProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser;
  playerData: IPlayerData;
}

const DashboardContainer: React.FC<
  IDashboardContainerOwnProps & IDashboardContainerStateToProps & IDashboardContainerDispatchToProps
> = (props) => {
  const {
    user, isAuthenticated, history, getPlayerStats,
  } = props;

  useEffect(() => {
    if (isAuthenticated) {
      getPlayerStats({ id: user._id });
    } else {
      history.push('/sign-in');
    }
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Dashboard {...props} />;
};

const mapDispatchToProps: MapDispatchToProps<
  IDashboardContainerDispatchToProps,
  IDashboardContainerOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  getPlayerStats: (id) => dispatch(getPlayerStatsAction(id)),
  updatePlayerStats: (data) => dispatch(updatePlayerStatsAction(data)),
});

const mapStateToProps: MapStateToProps<
  IDashboardContainerStateToProps,
  IDashboardContainerOwnProps,
  IAppState
> = (state: IAppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isLoading: state.app.isLoading,
  playerData: state.player.stats,
});

export default connect<
  IDashboardContainerStateToProps,
  IDashboardContainerDispatchToProps,
  IDashboardContainerOwnProps,
  IAppState
>(mapStateToProps, mapDispatchToProps)(DashboardContainer);
