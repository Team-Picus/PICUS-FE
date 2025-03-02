import { useState, useRef, useEffect } from 'react';

export const useControlTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleTab = (tab: number) => {
    if (activeTab === tab) return;
    setActiveTab(tab);
  };

  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  const tabRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const updateIndicator = () => {
      const currentRef = tabRefs[activeTab - 1].current;
      if (!currentRef) return;

      const { offsetWidth, offsetLeft } = currentRef;
      setIndicatorStyle({
        width: offsetWidth * 0.7,
        left: offsetLeft + offsetWidth / 6,
      });
    };

    updateIndicator();

    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeTab]);

  return { activeTab, handleTab, tabRefs, indicatorStyle };
};
