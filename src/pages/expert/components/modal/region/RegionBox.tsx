import styled from 'styled-components';
import { RegionCheckBox } from '@expert/components/modal/region/RegionCheckBox.tsx';

const RegionBox = () => {
  return (
    <Container>
      <CheckSection>
        <RegionCheckBox id="studio" label="개인 스튜디오" />
      </CheckSection>
      <DropdownSection>
        <RegionCheckBox id="outdoor" label="외부 촬영"></RegionCheckBox>
      </DropdownSection>
    </Container>
  );
};

export default RegionBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

const CheckSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 25px;
`;

const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
