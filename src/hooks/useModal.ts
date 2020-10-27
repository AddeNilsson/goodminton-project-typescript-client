import { useState } from 'react';

interface IUseModal {
  showModal: string;
  closeModal: () => void;
  openModal: (modal: string) => void;
}

export const useModal = (): IUseModal => {
  const [showModal, setShowModal] = useState('');

  return {
    showModal,
    closeModal: () => setShowModal(''),
    openModal: (modal: string) => setShowModal(modal),
  };
};

export default useModal;
