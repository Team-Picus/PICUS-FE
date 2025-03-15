import React from 'react';
import styled from 'styled-components';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

interface RegionCheckBoxProps {
  id: string;
  label: string;
  isOutdoor: boolean;
}

export const RegionCheckBox: React.FC<RegionCheckBoxProps> = ({ id, label, isOutdoor }) => {
  const { region, setRegion } = useFilterStore();

  const handleButtonChange = () => {
    setRegion({ ...region, isOutdoor });
  };

  return (
    <Wrapper>
      <CheckBoxInput
        id={id}
        name="region"
        type="checkbox"
        checked={region.isOutdoor === isOutdoor}
        onChange={handleButtonChange}
      />
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