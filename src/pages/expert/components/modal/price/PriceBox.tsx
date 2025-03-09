import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PriceRadioButton } from '@expert/components/modal/price/PriceRadioButton.tsx';
import { PriceInputField } from '@expert/components/modal/price/PriceInputField.tsx';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

const PriceBox = () => {
  const { setPrice } = useFilterStore();
  const [customPrice, setCustomPrice] = useState({
    min: '',
    max: '',
  });
  const [isDirect, setIsDirect] = useState(false);

  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);

  // 라디오 버튼 클릭 시 가격 필터 적용
  const handleRadioChange = (label: string) => {
    setIsDirect(false); // 직접 입력 해제
    setPrice(label === '전체' ? null : label);
  };

  // 직접 입력 버튼 클릭 시 포커스 & 상태 변경
  const handleDirectPriceClick = () => {
    setIsDirect(true);
    if (minInputRef.current) {
      minInputRef.current.focus();
    }
  };

  // 직접 입력 필드 변경 시 상태 업데이트
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomPrice((prev) => ({
        ...prev,
        [type]: value,
      }));
    }
  };

  // 입력한 최소 & 최대값이 모두 있을 때 `setPrice` 적용
  useEffect(() => {
    if (customPrice.min && customPrice.max) {
      setPrice({ min: Number(customPrice.min), max: Number(customPrice.max) });
    }
  }, [customPrice, setPrice]);

  return (
    <Container>
      <RadioSection>
        <PriceRadioButton id="all" label="전체" onChange={() => handleRadioChange('전체')} />
        <PriceRadioButton
          id="under5"
          label="5만원 이하"
          onChange={() => handleRadioChange('5만원 이하')}
        />
        <PriceRadioButton
          id="5to10"
          label="5만원 ~ 10만원"
          onChange={() => handleRadioChange('5만원 ~ 10만원')}
        />
        <PriceRadioButton
          id="10to15"
          label="10만원 ~ 15만원"
          onChange={() => handleRadioChange('10만원 ~ 15만원')}
        />
        <PriceRadioButton
          id="15to20"
          label="15만원 ~ 20만원"
          onChange={() => handleRadioChange('15만원 ~ 20만원')}
        />
        <PriceRadioButton
          id="20to30"
          label="20만원 ~ 30만원"
          onChange={() => handleRadioChange('20만원 ~ 30만원')}
        />
        <PriceRadioButton
          id="30to50"
          label="30만원 ~ 50만원"
          onChange={() => handleRadioChange('30만원 ~ 50만원')}
        />
        <PriceRadioButton
          id="up50"
          label="50만원 이상"
          onChange={() => handleRadioChange('50만원 이상')}
        />
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
            onChange={(e) => handlePriceChange(e, 'min')}
            isFocused={isDirect}
          />
          <span>~</span>
          <PriceInputField
            ref={maxInputRef}
            type="max"
            value={customPrice.max}
            onChange={(e) => handlePriceChange(e, 'max')}
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
  margin: 25px 0 0 0;
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
