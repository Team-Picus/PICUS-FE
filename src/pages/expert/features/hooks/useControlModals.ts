import { useState } from 'react';

export const useControlModal = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return { modalState, openModal, closeModal, setModalState };
};
