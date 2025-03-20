import React from 'react';
import styled from 'styled-components';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

interface RegionCheckBoxProps {
  label: string;
  isOutdoorValue: boolean;
}

export const RegionCheckBox: React.FC<RegionCheckBoxProps> = ({ label, isOutdoorValue }) => {
  const { isOutdoor, setIsOutdoor } = useFilterStore();
  const isChecked = isOutdoor === isOutdoorValue;

  const handleCheckBoxClick = () => {
    setIsOutdoor(isChecked ? null : isOutdoorValue);
  };

  return (
    <Wrapper onClick={handleCheckBoxClick}>
      <CheckBoxInput type="checkbox" checked={isChecked} readOnly />
      <Label $isChecked={isChecked}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: auto; /* 기본 체크 표시 유지 */
  accent-color: ${({ theme }) => theme.colors.main1};
  padding: 15px 15px;
  cursor: pointer;

  /* 체크 안 된 상태 */
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;

  &:checked {
    background-color: ${({ theme }) => theme.colors.main1};
    border-radius: 2px;
  }
`;

interface LabelProps {
  $isChecked: boolean;
}

const Label = styled.label<LabelProps>`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme, $isChecked }) => ($isChecked ? theme.colors.main1 : theme.colors.gray7)};
`;
