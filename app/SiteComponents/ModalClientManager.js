'use client';
import { useState, createContext, useContext } from 'react';
import Modal from './Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);


const ModalClientManager = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal }}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalClientManager;
