import React, { FunctionComponent } from 'react';
import Moment from 'moment';

import { ITableColumn } from '../../common/CommonTypes';
import { ILogEntry } from '../../store/logs/LogsTypes';
import { Table, TableRow } from '../../common/Table';
import LoadingSpinner from '../../common/LoadingSpinner';
import Grid from '../../common/Grid';
import IconButton from '../../common/IconButton';
import { DeleteIcon } from '../../common/Icons';
import { Paragraph } from '../../common/Typography';

interface ILogsListOwnProps {
  logs: ILogEntry [];
  isLoading: boolean;
  handleRevert: (entry: ILogEntry) => void;
}

const columns: ITableColumn [] = [
  { id: 'regWon', label: 'Won' },
  { id: 'regLost', label: 'Lost' },
  { id: 'regWalkOvers', label: 'Wlk-overs' },
  { id: 'created', label: 'Created' },
  { id: 'action', label: 'Revert' },
];

const LogsList: FunctionComponent<ILogsListOwnProps> = ({
  logs,
  isLoading,
  handleRevert,
}) => (
  <Grid row classes="flex-center">
    <Grid xs={12}>
      { isLoading
        ? <LoadingSpinner blocker={false} active={isLoading} color="dark" />
        : (
          <Table columns={columns} dense>
            {logs.map((r: ILogEntry) => (
              <TableRow key={r._id} dense>
                {columns.map((c: ITableColumn) => (
                  c.id === 'action'
                    ? (
                      <td key={c.id}>
                        <IconButton small disabled={r.reverted} handleClick={() => handleRevert(r)}>
                          <DeleteIcon size="sm" color="error" />
                        </IconButton>
                      </td>
                    )
                    : c.id === 'created'
                      ? <td key={c.id}>{ Moment(r.created).format('YYYY-MM-DD HH:mm') }</td>
                      : (
                        <td key={c.id}>
                          <Paragraph>{ r[c.id as keyof ILogEntry] }</Paragraph>
                        </td>
                      )
                ))}
              </TableRow>
            ))}
          </Table>
        )}
    </Grid>
  </Grid>
);

export default LogsList;
