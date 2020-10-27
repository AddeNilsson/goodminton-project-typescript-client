import React, { FunctionComponent } from 'react';

import { ITableColumn } from '../../common/CommonTypes';
import { ILeaderboardDataItem } from '../../store/leaderboard/LeaderboardTypes';
import { Table } from '../../common/Table';
import { Card, CardContent } from '../../common/Card';
import Grid from '../../common/Grid';
import { Paragraph, Title } from '../../common/Typography';

interface ILeaderboardsOwnProps {
  items: ILeaderboardDataItem []
}

const columns: ITableColumn [] = [
  { id: 'name', label: 'Player' },
  { id: 'won', label: 'Won' },
  { id: 'lost', label: 'Lost' },
  { id: 'walkOvers', label: 'Wlk-overs' },
  { id: 'gamesTotal', label: 'Total Games' },
  { id: 'winRatio', label: 'Ratio' },
];

const LeaderBoard: FunctionComponent<ILeaderboardsOwnProps> = ({ items }) => (
  <Grid row classes="flex-center">
    <Grid xs={12} sm={10} md={8}>
      <Card>
        <CardContent>
          <Title>Leaderboards</Title>
        </CardContent>
        <CardContent>
          <Table columns={columns}>
            {items.map((r: ILeaderboardDataItem) => (
              <tr key={r.email}>
                {columns.map((c: ITableColumn) => (
                  <td key={c.id}>
                    <Paragraph>
                      { r[c.id as keyof ILeaderboardDataItem] }
                    </Paragraph>
                  </td>
                ))}
              </tr>
            ))}
          </Table>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default LeaderBoard;
