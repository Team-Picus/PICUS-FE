import { useHandleToggle } from '@my/feature/useHandleToggle.ts';
import { useState } from 'react';

export const useHandlePostFilter = () => {
  const { isOn, handleToggle } = useHandleToggle();
  const [filter, setFilter] = useState('최근 활동 순');
  const filterItems = ['최근 활동 순', '후기 많은 순', '가격 높은 순', '가격 낮은 순'];
  const changeFilter = (index: number) => {
    setFilter(filterItems[index]);
  };
  return { isOn, handleToggle, filter, filterItems, changeFilter };
};
