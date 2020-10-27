import React, { FunctionComponent, ReactNode } from 'react';

interface IListHeaderOwnProps {
  children: ReactNode;
  dense?: boolean;
}

const ListHeader: FunctionComponent<IListHeaderOwnProps> = ({
  children,
  dense,
}) => (
  <div className={`list-header ${dense ? 'dense' : ''}`}>
    { children }
  </div>
);

export default ListHeader;
