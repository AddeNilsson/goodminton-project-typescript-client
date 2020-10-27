import React, { FunctionComponent } from 'react';

import { IPlayerData } from '../../../store/player/PlayerTypes';

import { CardContent } from '../../../common/Card';
import Grid from '../../../common/Grid';
import { Button } from '../../../common/Button';
import PlayerDetails from './PlayerDetails';
import Leaderboard from '../../../leaderboard';
import { Title, Paragraph, ButtonText } from '../../../common/Typography';

interface IPlayerOwnProps {
  playerData: IPlayerData;
  handleViewLogs: () => void;
  name: string;
}

const Player: FunctionComponent<IPlayerOwnProps> = ({
  playerData,
  name,
  playerData: { winRatio },
  handleViewLogs,
}) => (
  <>
    <CardContent>
      <Grid row classes="flex-wrap">
        <Grid xs={12} md={8}>
          <Title>{ `Welcome ${name} `}</Title>
          <Paragraph>{ `Your Ratio is: ${winRatio}` }</Paragraph>
          <Paragraph>
            Register a game outcome using buttons or multiple games below.
            Walkover registers 6 losses.
          </Paragraph>
          <Paragraph>Edit / Undo registration by using the log.</Paragraph>
        </Grid>
        <Grid xs={12} md={4}>
          <Grid row classes="justify-end">
            <div>
              <Button color="black" disabled={false} handleClick={handleViewLogs}>
                <ButtonText>Logs</ButtonText>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
    <CardContent>
      <Grid row gutters classes="flex-wrap">
        <Grid xs={12} md={7}>
          <PlayerDetails {...playerData} />
        </Grid>
        <Grid xs={12} md={5}>
          <Leaderboard topList rowLimit={4} />
        </Grid>
      </Grid>
    </CardContent>
  </>
);

export default Player;
