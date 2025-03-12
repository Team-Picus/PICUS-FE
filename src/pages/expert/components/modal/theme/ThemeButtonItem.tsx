import styled from 'styled-components';
import React from 'react';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

interface ThemeButtonItemProps {
  text: string;
}

const ThemeButtonItem: React.FC<ThemeButtonItemProps> = ({ text }) => {
  const { themes, addTheme, removeTheme } = useFilterStore();

  // 현재 선택된 버튼인지 확인
  const isSelected = themes.includes(text);

  // 클릭 시, 선택되었다면 제거 / 선택되지 않았다면 추가
  const handleClick = () => {
    if (isSelected) {
      removeTheme(text);
    } else {
      addTheme(text);
    }
  };

  return (
    <Container $isSelected={isSelected} onClick={handleClick}>
      {text}
    </Container>
  );
};

export default ThemeButtonItem;

const Container = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  border-radius: 108px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.tag3 : theme.colors.gray2}; // 선택된 경우 배경색 변경
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.main1 : theme.colors.gray7}; // 선택된 경우 글자색 변경
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
`;
