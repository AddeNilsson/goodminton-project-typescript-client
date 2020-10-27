import React, { ReactNode, FunctionComponent } from 'react';
import './Button.scss';

interface ISubmitButtonProps {
  disabled: boolean;
  children: ReactNode | ReactNode [];
  color?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const SubmitButton: FunctionComponent<ISubmitButtonProps> = ({
  isLoading,
  disabled = false,
  color,
  children,
  fullWidth,
  className,
}) => (
  <button
    className={`button ${color === 'blue' ? 'blue' : 'transparent'} ${fullWidth ? 'full-width' : ''} ${className}`}
    disabled={disabled || isLoading}
    type="submit"
  >
    { isLoading ? 'Loading..' : children }
  </button>
);

export default SubmitButton;
