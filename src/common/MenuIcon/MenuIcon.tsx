import React, { FunctionComponent } from 'react';
import './MenuIcon.scss';

interface IMenuIconOwnProps {
  open: boolean;
}

const MenuIcon: FunctionComponent<IMenuIconOwnProps> = ({ open }) => (
  <div className={`nav-icon icon-white ${open ? 'icon-close' : 'icon-open'}`} />
);

export default MenuIcon;
