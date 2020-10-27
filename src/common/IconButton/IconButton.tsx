import React, { FunctionComponent, ReactNode } from 'react';

import './IconButton.scss';

interface IIconButtonOwnProps {
  children: ReactNode;
  handleClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  small?: boolean;
}

const IconButton: FunctionComponent<IIconButtonOwnProps> = ({
  disabled,
  children,
  handleClick,
  isLoading,
  small,
}) => (
  <button
    className="icon-button"
    disabled={disabled || isLoading}
    onClick={handleClick}
    type="button"
  >
    <div className={`icon-button-inner ${small ? 'btn-sm' : 'btn-size'}`}>
      { children }
    </div>
  </button>
);

export default IconButton;
