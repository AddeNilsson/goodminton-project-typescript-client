import React, { FunctionComponent, ReactNode } from 'react';

import './Modal.scss';
import Grid from '../Grid';
import Backdrop from '../Backdrop';
import IconButton from '../IconButton';
import { Title } from '../Typography';
import CloseIcon from '../CloseIcon';

interface IModalOwnProps {
  show: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
}

const Modal: FunctionComponent<IModalOwnProps> = ({
  show, closeModal, title, children, maxWidth,
}) => (
  <div className="modal">
    <Backdrop show={show}>
      <Grid row classes="modal-wrapper">
        <div className={`modal-content max-width-${maxWidth} ${show ? 'show' : 'hide'}`}>
          <Grid row gutters classes="modal-header flex-align-center">
            <Grid xs={8}>
              <Title>{ title }</Title>
            </Grid>
            <Grid xs={4}>
              <div className="text-right">
                <IconButton handleClick={closeModal}>
                  {/* <i className="material-icons">close</i> */}
                  <CloseIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <div className="modal-body">
            { children }
          </div>
        </div>
      </Grid>
    </Backdrop>
  </div>
);

Modal.defaultProps = {
  maxWidth: 'md',
  title: '',
};

export default Modal;
