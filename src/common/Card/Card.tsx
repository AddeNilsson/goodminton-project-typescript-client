import React, { FunctionComponent, ReactNode } from 'react';
import './Card.scss';

interface ICardOwnProps {
  children: ReactNode;
}

const Card: FunctionComponent<ICardOwnProps> = ({ children }) => (
  <div className="card">
    { children }
  </div>
);

export default Card;
