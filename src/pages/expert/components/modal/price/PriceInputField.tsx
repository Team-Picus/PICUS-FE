import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface PriceInputFieldProps {
  type: 'min' | 'max';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => void;
  isFocused: boolean;
}

export const PriceInputField = forwardRef<HTMLInputElement, PriceInputFieldProps>(
  ({ type, value, onChange, isFocused }, ref) => {
    return (
      <PriceInput
        ref={ref} // forward ref 사용
        type="text"
        value={value}
        onChange={(e) => onChange(e, type)}
        placeholder="₩ 0"
        $isFocused={isFocused}
      />
    );
  },
);

const PriceInput = styled.input<{ $isFocused: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid
    ${({ theme, $isFocused }) => ($isFocused ? theme.colors.main1 : theme.colors.gray4)};
  color: ${({ theme }) => theme.colors.gray8};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main1};
    outline: none;
  }
`;
