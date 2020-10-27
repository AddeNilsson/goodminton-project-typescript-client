import React, { FunctionComponent, ReactNode } from 'react';
import './Backdrop.scss';

interface IBackdropOwnProps {
  children: ReactNode;
  show: boolean;
  dark?: boolean
}

const Backdrop: FunctionComponent<IBackdropOwnProps> = ({
  children,
  show,
  dark,
}) => {
  const classes = `${show ? 'backdrop-show' : 'backdrop-hide'} ${dark ? 'dark' : ''}`;
  return (
    <div className={`backdrop ${classes}`}>
      { show && children }
    </div>
  );
};

Backdrop.defaultProps = {
  dark: false,
};

export default Backdrop;
