import React, { FunctionComponent } from 'react';
import Moment from 'moment';

import { IPlayerData as IPlayerDetailsOwnProps } from '../../../store/player/PlayerTypes';
import { Card } from '../../../common/Card';
import { List, ListItem, ListHeader } from '../../../common/List';
import { Subtitle, Paragraph } from '../../../common/Typography';

const PlayerDetails: FunctionComponent<IPlayerDetailsOwnProps> = ({
  winRatio, won, lost, walkOvers, gamesTotal, touched,
}) => (
  <Card>
    <ListHeader>
      <Subtitle>Your Stats</Subtitle>
    </ListHeader>
    <List>
      <ListItem divider>
        <Paragraph>{ `Ratio: ${winRatio}` }</Paragraph>
      </ListItem>
      <ListItem divider>
        <Paragraph>{ `Won: ${won}` }</Paragraph>
        <Paragraph>{ `Lost: ${lost}` }</Paragraph>
      </ListItem>
      <ListItem divider>
        <Paragraph>{ `Walk-over's: ${walkOvers}` }</Paragraph>
        <Paragraph>{ `Games: ${gamesTotal}` }</Paragraph>
      </ListItem>
      <ListItem divider>
        <Paragraph>Updated:</Paragraph>
        <Paragraph>{ Moment(touched).format('YYYY-MM-DD HH:mm') }</Paragraph>
      </ListItem>
    </List>
  </Card>
);

export default PlayerDetails;
