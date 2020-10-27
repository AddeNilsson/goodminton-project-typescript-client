import React, { FunctionComponent } from 'react';
import './CloseIcon.scss';

interface ICloseIconOwnProps {}

const CloseIcon: FunctionComponent<ICloseIconOwnProps> = () => (
  <div className="nav-icon icon-white icon-close" />
);

export default CloseIcon;
