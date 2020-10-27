import React, { ReactNode, MouseEvent, FunctionComponent } from 'react';
import './Button.scss';

interface IButtonProps {
  disabled: boolean;
  handleClick: (e: MouseEvent) => void;
  children: ReactNode | ReactNode [];
  color?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: FunctionComponent<IButtonProps> = ({
  isLoading,
  disabled = false,
  color,
  handleClick,
  children,
  fullWidth,
  className,
}) => (
  <button
    className={`button ${color || 'primary'} ${fullWidth ? 'full-width' : ''} ${className || ''}`}
    disabled={disabled || isLoading}
    onClick={handleClick}
    type="button"
  >
    { isLoading ? 'Loading..' : children }
  </button>
);

export default Button;
