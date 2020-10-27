import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';

import './Typography.scss';

interface ITypographyOwnProps {
  children: ReactNode | ReactNode [];
  className?: string;
}
export const Heading: FunctionComponent<ITypographyOwnProps> = ({
  children, className,
}) => (
  <h1 className={`heading ${className}`}>
    { children }
  </h1>
);

export const Title: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <h1 className={`title ${className}`}>
    { children }
  </h1>
);

export const Paragraph: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <p className={`paragraph ${className}`}>{ children }</p>
);

export const Subtitle: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <h4 className={`subtitle ${className}`}>
    { children }
  </h4>
);

export const Caption: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <p className={`caption ${className}`}>{ children }</p>
);

export const Label: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <p className={`label ${className}`}>{ children }</p>
);

export const ButtonText: FunctionComponent<ITypographyOwnProps> = ({ children, className }) => (
  <p className={`btn-text ${className}`}>{ children }</p>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  className: '',
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Caption.defaultProps = {
  className: '',
};

ButtonText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonText.defaultProps = {
  className: '',
};
