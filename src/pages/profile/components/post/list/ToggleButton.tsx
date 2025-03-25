import styled from 'styled-components';
import { useHandleToggle } from '@pages/profile/feature/useHandleToggle.ts';

function ToggleButton() {
  const { isOn, handleToggle } = useHandleToggle();

  return (
    <ToggleSwitch $isOn={isOn} onClick={handleToggle}>
      <ToggleKnob $isOn={isOn} />
    </ToggleSwitch>
  );
}

export default ToggleButton;

// 토글 전체 영역
const ToggleSwitch = styled.div<{ $isOn: boolean }>`
  width: 40px;
  height: 16px;
  border-radius: 20px;
  background-color: ${({ $isOn, theme }) => ($isOn ? theme.colors.main1 : theme.colors.gray2)};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
`;

// 동그라미(토글 버튼)
const ToggleKnob = styled.div<{ $isOn: boolean }>`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ $isOn }) => ($isOn ? 'translateX(16px)' : 'translateX(0)')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
