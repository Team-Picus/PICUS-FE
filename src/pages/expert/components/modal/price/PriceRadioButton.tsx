import React from 'react';
import styled from 'styled-components';

interface PriceRadioButtonProps {
  id: string;
  label: string;
  onChange: () => void;
  checked?: boolean;
}

export const PriceRadioButton: React.FC<PriceRadioButtonProps> = ({ id, label, onChange, checked }) => {
  return (
    <RadioWrapper>
      <RadioInput id={id} name="price" type="radio" onChange={onChange} checked={checked} />
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
};

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid ${({ theme }) => theme.colors.gray4};
  border-radius: 100px;
  width: 1em;
  height: 1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:checked {
    background-color: ${({ theme }) => theme.colors.white};
    border: max(2px, 0.3em) solid ${({ theme }) => theme.colors.main1};
  }

  &:hover {
    border: 0.3em solid ${({ theme }) => theme.colors.main1};
  }
`;

const Label = styled.label`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${RadioInput}:checked + & {
    color: black;
    border-color: ${({ theme }) => theme.colors.main1};
  }
`;