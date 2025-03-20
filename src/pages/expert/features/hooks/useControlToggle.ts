import { useState } from 'react';

export const useControlToggle = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => setIsOn((prev) => !prev);
  const handleOpen = () => setIsOn(true);
  const handleClose = () => setIsOn(false);

  return {
    isOn,
    handleToggle,
    handleOpen,
    handleClose,
  };
};
