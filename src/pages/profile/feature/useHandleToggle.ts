import { useState } from 'react';

export const useHandleToggle = () => {
  const [isOn, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOn);
  };
  return { isOn, handleToggle };
}
