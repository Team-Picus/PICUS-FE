import { useState } from 'react';

export const useControlToggle = () => {
  const [isOn, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOn);
  };
  return { isOn, handleToggle };
};
