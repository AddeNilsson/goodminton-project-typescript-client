import React, { FunctionComponent } from 'react';

import { ILeaderboardDataItem } from '../../store/leaderboard/LeaderboardTypes';
import { Card } from '../../common/Card';
import { List, ListItem, ListHeader } from '../../common/List';
import { Paragraph, Subtitle } from '../../common/Typography';

interface ITopListOwnProps {
  items: ILeaderboardDataItem [];
  rowLimit: number;
}

const TopList: FunctionComponent<ITopListOwnProps> = ({
  items,
  rowLimit,
}) => (
  <Card>
    <ListHeader>
      <Subtitle>{ `Top ${rowLimit}` }</Subtitle>
    </ListHeader>
    <List>
      { items
        .slice(0, rowLimit)
        .map((p) => (
          <ListItem divider key={p.email}>
            <Paragraph>{ p.name || 'anonyous' }</Paragraph>
            <Paragraph>{ p.winRatio }</Paragraph>
          </ListItem>
        ))}
    </List>
  </Card>
);

export default TopList;
