import React, { useEffect, FunctionComponent } from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { getLeaderboardData as getLeaderboardDataAction } from '../store/leaderboard/LeaderboardActions';
import Leaderboard from './Leaderboard';
import TopList from './TopList';
import { IAppState } from '../store';
import { ILeaderboardDataItem } from '../store/leaderboard/LeaderboardTypes';

interface ILeaderboardContainerOwnProps {
  topList: boolean;
  rowLimit: number;
}

interface ILeaderboardContainerDispatchToProps {
  getLeaderboardData: () => void;
}

interface ILeaderboardContainerStateToProps {
  leaderboardData: ILeaderboardDataItem [];
}

const LeaderboardContainer: FunctionComponent<
  ILeaderboardContainerDispatchToProps & ILeaderboardContainerOwnProps & ILeaderboardContainerStateToProps // eslint-disable-line max-len
> = ({
  leaderboardData,
  getLeaderboardData,
  topList,
  rowLimit,
}) => {
  useEffect(() => {
    if (leaderboardData.length < 1) {
      getLeaderboardData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const props = { rowLimit, items: leaderboardData };

  return topList
    ? <TopList {...props} />
    : <Leaderboard {...props} />;
};

LeaderboardContainer.defaultProps = {
  rowLimit: 0,
  topList: false,
};

const mapDispatchToProps: MapDispatchToProps<
  ILeaderboardContainerDispatchToProps,
  ILeaderboardContainerOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  getLeaderboardData: () => dispatch(getLeaderboardDataAction()),
});

const mapStateToProps: MapStateToProps<
  ILeaderboardContainerStateToProps,
  ILeaderboardContainerOwnProps,
  IAppState
> = (state: IAppState) => ({
  leaderboardData: state.leaderboard.data,
});

export default connect<
  ILeaderboardContainerStateToProps,
  ILeaderboardContainerDispatchToProps,
  ILeaderboardContainerOwnProps,
  IAppState
>(mapStateToProps, mapDispatchToProps)(LeaderboardContainer);
