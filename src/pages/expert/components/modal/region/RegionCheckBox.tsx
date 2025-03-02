import React from 'react';
import styled from 'styled-components';

interface RegionCheckBoxProps {
  id: string;
  label: string;
}

export const RegionCheckBox: React.FC<RegionCheckBoxProps> = ({ id, label }) => {
  return (
    <Wrapper>
      <CheckBoxInput id={id} name="region" type="checkbox" />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBoxInput = styled.input`
  vertical-align: middle;
  appearance: none;
  background: ${({ theme }) => theme.colors.white};
  border: max(1px, 0.1em) solid ${({ theme }) => theme.colors.gray5};
  width: 1em;
  height: 1em;
  border-radius: 2px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.main1};
    content: '✔';
  }
`;

const Label = styled.label`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray5};
`;
