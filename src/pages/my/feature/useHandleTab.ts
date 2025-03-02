import { useEffect, useRef, useState } from 'react';

export const useHandleTab = () => {
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

      // 실제 DOM 요소의 너비와 왼쪽 위치를 구함
      const { offsetWidth, offsetLeft } = currentRef;
      setIndicatorStyle({
        width: offsetWidth * 0.8,
        left: offsetLeft + offsetWidth / 2, // 중앙 기준
      });
    };

    // 초기/탭 변경 시 계산
    updateIndicator();

    // 브라우저 리사이즈에도 재계산
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeTab]);

  return { activeTab, handleTab, tabRefs, indicatorStyle };
};
