import { createContext, useContext, useState } from "react";

const ModalControllerContext = createContext();

export const ModalControllerProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedDays, setSelectedDays] = useState(undefined);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <ModalControllerContext.Provider
      value={{ toggleModal, handleModal, selectedDays, setSelectedDays }}
    >
      {children}
    </ModalControllerContext.Provider>
  );
};

export const useModalController = () => useContext(ModalControllerContext);
