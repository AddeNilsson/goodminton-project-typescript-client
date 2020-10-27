import React, { FunctionComponent, ReactNode } from 'react';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import IconButton from '../IconButton';
import MenuIcon from '../MenuIcon';
import './Drawer.scss';

interface IDrawerOwnProps {
  open: boolean;
  closeDrawer: () => void;
  children: ReactNode;
}

const Drawer: FunctionComponent<IDrawerOwnProps> = ({
  open,
  closeDrawer,
  children,
}) => (
  <Backdrop show={open}>
    <div className={`drawer ${open ? 'show' : 'hide'}`}>
      { open && (
        <>
          <Grid row gutters classes="drawer-header flex-align-center">
            <Grid xs={2}>
              <IconButton handleClick={closeDrawer}>
                <MenuIcon open={open} />
              </IconButton>
            </Grid>
          </Grid>
          <div>
            { children }
          </div>
        </>
      )}
    </div>
  </Backdrop>
);

export default Drawer;
