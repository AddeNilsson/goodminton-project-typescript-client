import React, { FunctionComponent } from 'react';

import { CardContent } from '../../../common/Card';
import Grid from '../../../common/Grid';
import { Button } from '../../../common/Button';
import { IRegisterGamePayload } from '../../../store/player/PlayerTypes';

interface IDashboardButtonsOwnProps {
  handleRegister: (payload: IRegisterGamePayload) => void;
  isLoading: boolean;
}

const DashboardButtons: FunctionComponent<IDashboardButtonsOwnProps> = ({
  handleRegister,
  isLoading,
}) => (
  <CardContent>
    <Grid classes="flex-wrap" row>
      <Grid xs={12} sm={4}>
        <Button
          color="black"
          handleClick={() => handleRegister({
            won: 1, lost: 0, walkOvers: 0, revert: false,
          })}
          disabled={isLoading}
          fullWidth
        >
          Win
        </Button>
      </Grid>
      <Grid xs={12} sm={4}>
        <Button
          color="black"
          handleClick={() => handleRegister({
            won: 0, lost: 1, walkOvers: 0, revert: false,
          })}
          disabled={isLoading}
          fullWidth
        >
          Lost
        </Button>
      </Grid>
      <Grid xs={12} sm={4}>
        <Button
          color="black"
          handleClick={() => handleRegister({
            won: 0, lost: 0, walkOvers: 1, revert: false,
          })}
          disabled={isLoading}
          fullWidth
        >
          Walkover
        </Button>
      </Grid>
    </Grid>
  </CardContent>
);

export default DashboardButtons;
