import React, { FunctionComponent, ReactNode } from 'react';

import { ITableColumn } from '../CommonTypes';
import { Paragraph } from '../Typography';
import './Table.scss';

interface ITableOwnProps {
  columns: ITableColumn [];
  children: ReactNode;
  dense?: boolean;
}

const Table: FunctionComponent<ITableOwnProps> = ({
  columns,
  children,
  dense,
}) => (
  <div className="table">
    <table>
      <thead>
        <tr>
          { columns.map((c) => (
            <th
              className={`${dense ? 'dense' : ''}`}
              key={c.id}
            >
              <Paragraph>{ c.label }</Paragraph>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  </div>
);

Table.defaultProps = {
  dense: false,
};

export default Table;
