import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { PriceRadioButton } from '@expert/components/modal/price/PriceRadioButton.tsx';
import { PriceInputField } from '@expert/components/modal/price/PriceInputField.tsx';

const PriceBox = () => {
  const [customPrice, setCustomPrice] = useState({
    min: '',
    max: '',
  });
  const [isDirect, setIsDirect] = useState(false);

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomPrice((prev) => ({
        ...prev,
        [type]: value,
      }));
    }
  };

  const handleDirectPriceClick = () => {
    setIsDirect(true);
    if (minInputRef.current) {
      minInputRef.current.focus(); // 직접 입력이 선택되면 min input에 포커스
    }
  };

  const handleRadioChange = () => {
    setIsDirect(false);
  };

  return (
    <Container>
      <RadioSection>
        <PriceRadioButton id="all" label="전체" onChange={handleRadioChange} />
        <PriceRadioButton id="5to10" label="5만원 ~ 10만원" onChange={handleRadioChange} />
        <PriceRadioButton id="10to15" label="10만원 ~ 15만원" onChange={handleRadioChange} />
        <PriceRadioButton id="15to20" label="15만원 ~ 20만원" onChange={handleRadioChange} />
        <PriceRadioButton id="20to25" label="20만원 ~ 25만원" onChange={handleRadioChange} />
        <PriceRadioButton id="25to30" label="25만원 ~ 30만원" onChange={handleRadioChange} />
      </RadioSection>

      <DirectSection>
        <PriceRadioButton
          id="direct"
          label="직접 입력"
          onChange={handleDirectPriceClick}
          checked={isDirect}
        />
        <FormSection>
          <PriceInputField
            ref={minInputRef}
            type="min"
            value={customPrice.min}
            onChange={handlePriceChange}
            isFocused={isDirect}
          />
          <span>~</span>
          <PriceInputField
            ref={maxInputRef}
            type="max"
            value={customPrice.max}
            onChange={handlePriceChange}
            isFocused={isDirect}
          />
        </FormSection>
      </DirectSection>

      <Description>기본 가격의 시간 단위는 30분입니다.</Description>
    </Container>
  );
};

export default PriceBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

const RadioSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 25px 0 0 0;
  gap: 10px;

  & > * {
    flex: 0 0 calc(50% - 5px);
  }
`;

const DirectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 10px;

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const Description = styled.p`
  margin-top: 16px;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.gray6};
`;
