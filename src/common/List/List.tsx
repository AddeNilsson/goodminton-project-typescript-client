import React, { FunctionComponent, ReactNode } from 'react';
import ListItem from './ListItem';

interface IListOwnProps {
  items?: [{ label: string }];
  children?: ReactNode;
}

interface IListWithItems {
  items: [{ label: string }];
}

const ListWithItems: FunctionComponent<IListWithItems> = ({ items }) => (
  <ul className="list">
    { items.length > 0 && items.map((i) => (
      <ListItem>
        { i.label }
      </ListItem>
    )) }
  </ul>
);

const List: FunctionComponent<IListOwnProps> = ({
  items,
  children,
}) => (
  items && items.length > 0
    ? <ListWithItems items={items} />
    : (
      <ul className="list">
        { children }
      </ul>
    )
);

export default List;
