import React, { FunctionComponent, ReactNode } from 'react';

interface ITableRowOwnProps {
  dense?: boolean;
  children: ReactNode;
}

const TableRow: FunctionComponent<ITableRowOwnProps> = ({
  dense,
  children,
}) => (
  <tr className={`${dense ? 'dense' : ''}`}>
    { children }
  </tr>
);

TableRow.defaultProps = {
  dense: false,
};

export default TableRow;
