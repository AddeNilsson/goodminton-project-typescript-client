import React, { FunctionComponent } from 'react';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import './LoadingSpinner.scss';

interface ILoadingSpinnerOwnProps {
  active: boolean;
  color?: string;
  blocker?: boolean;
}

const Spinner: FunctionComponent<ILoadingSpinnerOwnProps> = ({ active, color }) => (
  active ? (
    <Grid row classes="flex-center align-center spinner">
      <div className={`ripple ${color === 'dark' ? 'border-dark' : 'border-white'}`}>
        <div />
        <div />
      </div>
    </Grid>
  ) : null
);

const BlockingSpinner: FunctionComponent<ILoadingSpinnerOwnProps> = ({ active }) => (
  active ? (
    <Backdrop show={active} dark>
      <Grid row classes="flex-center align-center block-spinner">
        <div className="ripple border-white">
          <div />
          <div />
        </div>
      </Grid>
    </Backdrop>
  ) : null
);

const LoadingSpinner: FunctionComponent<ILoadingSpinnerOwnProps> = ({ blocker, ...rest }) => (
  blocker
    ? <BlockingSpinner {...rest} />
    : <Spinner {...rest} />
);

export default LoadingSpinner;
