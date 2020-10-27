import React, { FunctionComponent } from 'react';

interface ICardImageOwnProps {
  imgUrl: string;
}

const CardImage: FunctionComponent<ICardImageOwnProps> = ({ imgUrl }) => (
  <div
    className="card-image"
    style={{ backgroundImage: `url(${imgUrl})` }}
  />
);

export default CardImage;
