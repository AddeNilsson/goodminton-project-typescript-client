import React, { FunctionComponent, ReactNode } from 'react';

interface ICardContentOwnProps {
  children: ReactNode;
}

const CardContent: FunctionComponent<ICardContentOwnProps> = ({ children }) => (
  <div className="card-content">
    { children }
  </div>
);

export default CardContent;
