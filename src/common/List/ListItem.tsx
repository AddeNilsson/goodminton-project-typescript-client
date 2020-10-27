import React, { FunctionComponent, ReactNode } from 'react';

interface IListItemOwnProps {
  children: ReactNode;
  dense?: boolean;
  active?: boolean;
  divider?: boolean
}

const ListItem: FunctionComponent<IListItemOwnProps> = ({
  children,
  dense,
  active,
  divider,
}) => {
  const classNames = [
    dense && 'dense',
    active && 'active',
    divider && 'divider',
    'list-item',
  ].reduce((acc, cur) => (
    cur ? `${cur} ${acc}` : acc
  ), '');
  return (
    <li className={`${classNames}`}>
      { children }
    </li>
  );
};

export default ListItem;
