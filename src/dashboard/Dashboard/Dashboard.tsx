import React, { FunctionComponent } from 'react';

import { IPlayerData, IRegisterGamePayload } from '../../store/player/PlayerTypes';

import img from '../../assets/img/img.jpg';
import { useModal } from '../../hooks/useModal';
import { Card, CardImage } from '../../common/Card';
import Grid from '../../common/Grid';
import Modal from '../../common/Modal';
import Player from './components/Player';
import DashboardButtons from './components/DashboardButtons';
import Logs from '../../logs';

interface IDashboardOwnProps {
  isLoading: boolean;
  playerData: IPlayerData;
  updatePlayerStats: (data: IRegisterGamePayload) => void;
  user: { name: string; }
}

const Dashboard: FunctionComponent<IDashboardOwnProps> = ({
  isLoading,
  playerData,
  updatePlayerStats,
  user: { name },
}) => {
  const { showModal, openModal, closeModal } = useModal();
  const handleRegister = (data: IRegisterGamePayload) => updatePlayerStats(data);

  return (
    <>
      <Modal show={showModal === 'viewLogs'} closeModal={closeModal}>
        <Logs />
      </Modal>
      <Grid row classes="flex-center">
        <Grid xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card>
            <CardImage imgUrl={img} />
            <Player
              playerData={playerData}
              handleViewLogs={() => openModal('viewLogs')}
              name={name}
            />
            <DashboardButtons
              handleRegister={handleRegister}
              isLoading={isLoading}
              {...playerData}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
