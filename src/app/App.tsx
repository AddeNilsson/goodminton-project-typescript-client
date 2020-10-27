import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnyAction } from 'redux';
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Routes from '../Routes';
import { IAppState } from '../store';
import {
  getCurrentUser as getCurrentUserAction,
  signOutUser as signOutUserAction,
} from '../store/auth/AuthActions';

import AppHeader from '../common/AppHeader';
import Drawer from '../common/Drawer';
import Navigation from '../common/Navigation';
import LoadingSpinner from '../common/LoadingSpinner';

interface IAppOwnProps {}

interface IAppStateToProps {
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface IAppDispatchToProps{
  getCurrentUser: () => void;
  signOutUser: () => void;
}

const App: React.FC<IAppOwnProps & IAppStateToProps & IAppDispatchToProps> = ({
  getCurrentUser,
  signOutUser,
  isAuthenticated,
  isLoading,
}) => {
  const [drawerOpen, openDrawer] = useState(false);
  console.log('TODO: Display Errors');

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      getCurrentUser();
    }
  }, [getCurrentUser]);

  return (
    <Router>
      <>
        <LoadingSpinner blocker active={isLoading} />
        <AppHeader
          openDrawer={() => openDrawer(true)}
          drawerOpen={drawerOpen}
          signOutUser={signOutUser}
          isAuthenticated={isAuthenticated}
        />
        <Drawer open={drawerOpen} closeDrawer={() => openDrawer(false)}>
          <Navigation closeDrawer={() => openDrawer(false)} />
        </Drawer>
        <main>
          <Routes />
        </main>
      </>
    </Router>
  );
};

const mapStateToProps: MapStateToProps<
IAppStateToProps,
IAppOwnProps,
IAppState
> = (state: IAppState)/* : IAppStateToProps */ => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps: MapDispatchToProps<
IAppDispatchToProps,
IAppOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  signOutUser: () => dispatch(signOutUserAction()),
  getCurrentUser: () => dispatch(getCurrentUserAction()),
});

export default connect<
IAppStateToProps,
IAppDispatchToProps,
IAppOwnProps,
IAppState
>(mapStateToProps, mapDispatchToProps)(App);
