import styled from 'styled-components';
import React from 'react';

interface ThemeButtonItemProps {
  text: string;
}

const ThemeButtonItem: React.FC<ThemeButtonItemProps> = ({ text }) => {
  return <Container>{text}</Container>;
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
