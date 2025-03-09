import styled from 'styled-components';
import React from 'react';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

interface ThemeButtonItemProps {
  text: string;
}

const ThemeButtonItem: React.FC<ThemeButtonItemProps> = ({ text }) => {
  const { addTheme } = useFilterStore();
  return <Container onClick={() => addTheme(text)}>{text}</Container>;
};

export default ThemeButtonItem;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  border-radius: 108px;
  background-color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray7};
`;
