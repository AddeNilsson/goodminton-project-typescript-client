import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface IIconsOwnProps {
  color?: 'primary' | 'secondary' | 'black' | 'white' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const DeleteIcon:FunctionComponent<IIconsOwnProps> = ({ color, size }) => (
  <svg className={`delete-icon icon-${size} icon icon-${color}`} viewBox="0 0 129 129">
    <path d="M46 6.4c-2.3 0-4 1.8-4 4V23H10.4c-2.3 0-4 1.8-4 4 0 2.4 1.8 4.2 4 4.2H15L25.5 119c.2 2 2 3.5 4 3.5h70c2 0 3.7-1.5 4-3.6L114 31h4.5c2.3 0 4-1.8 4-4 0-2.4-1.7-4.2-4-4.2H87V10.5c0-2.3-1.7-4-4-4H46zm4 8.2h29V23H50v-8.4zM23.4 31.2h82.4l-10 83.2H33.3l-10-83.2zM51 44.6c-2.4 0-4.2 1.8-4.2 4V98c0 2.3 1.8 4 4 4 2.4 0 4.2-1.7 4.2-4V49c0-2.4-1.8-4.2-4-4.2zm27 0c-2.2 0-4 1.8-4 4V98c0 2.3 2 4 4 4 2.4 0 4.2-1.7 4.2-4V49c0-2.4-1.8-4.2-4-4.2z" />
  </svg>
);

DeleteIcon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'white', 'error']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

DeleteIcon.defaultProps = {
  color: 'black',
  size: 'md',
};

export const HomeIcon:FunctionComponent<IIconsOwnProps> = ({ color, size }) => (
  <svg className={`icon-home icon-${size} icon icon-${color}`} viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

HomeIcon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'white', 'error']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

HomeIcon.defaultProps = {
  color: 'black',
  size: 'md',
};

export const WarningIcon:FunctionComponent<IIconsOwnProps> = ({ color, size }) => (
  <svg className={`icon-warning icon-${size} icon icon-fill-${color}`} viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

WarningIcon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'white', 'error']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

WarningIcon.defaultProps = {
  color: 'black',
  size: 'md',
};
