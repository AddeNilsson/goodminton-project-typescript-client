import React, { FunctionComponent } from 'react';

import './AppHeader.scss';
import Grid from '../Grid';
import { Button } from '../Button';
import { ButtonText, Title } from '../Typography';
import IconButton from '../IconButton';
import MenuIcon from '../MenuIcon';

interface IAppHeaderOwnProps {
  openDrawer: () => void;
  signOutUser: () => void;
  isAuthenticated: boolean;
  drawerOpen: boolean;
}

const AppHeader: FunctionComponent<IAppHeaderOwnProps> = ({
  openDrawer,
  signOutUser,
  isAuthenticated,
  drawerOpen,
}) => (
  <Grid row gutters classes="app-header text-white">
    <Grid xs={2} md={3}>
      <IconButton handleClick={openDrawer}>
        <MenuIcon open={drawerOpen} />
      </IconButton>
    </Grid>
    <Grid md={6} classes="hide-md-down text-center">
      <Title className="text-light">TSminton Tracker</Title>
    </Grid>
    <Grid row xs={10} md={3} classes="flex-align-center justify-end">
      <Button
        disabled={!isAuthenticated}
        handleClick={signOutUser}
      >
        <ButtonText className="text-light">Sign Out</ButtonText>
      </Button>
    </Grid>
  </Grid>
);

export default AppHeader;
