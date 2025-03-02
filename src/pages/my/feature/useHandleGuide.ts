import { useState } from 'react';

export const useHandleGuide = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleGuide = () => {
    if (!showGuide) {
      setShowGuide(true);
      setTimeout(() => setIsVisible(true), 0);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShowGuide(false), 300); // transition duration
      }, 3000);
    }
  };
  return { showGuide, isVisible, handleGuide };
};
