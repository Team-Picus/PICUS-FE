import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';
import IconDown from '@icon/icon-down.svg';

// mock 데이터
const cities = ['서울', '부산', '대구', '인천'];
const districtsMap: { [key: string]: string[] } = {
  서울: ['강남구', '서초구', '종로구'],
  부산: ['해운대구', '수영구', '남구'],
  대구: ['중구', '남구', '동구'],
  인천: ['연수구', '남동구', '부평구'],
};

const RegionDropdown: React.FC = () => {
  const { region, setRegion } = useFilterStore();
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);

  // 버튼과 드롭다운의 위치를 계산하기 위한 ref
  const cityButtonRef = useRef<HTMLButtonElement>(null);
  const districtButtonRef = useRef<HTMLButtonElement>(null);

  // 드롭다운 위치 스타일 상태
  const [cityDropdownStyle, setCityDropdownStyle] = useState<CSSProperties>({});
  const [districtDropdownStyle, setDistrictDropdownStyle] = useState<CSSProperties>({});

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCityOpen &&
        cityButtonRef.current &&
        !cityButtonRef.current.contains(event.target as Node)
      ) {
        setIsCityOpen(false);
      }
      if (
        isDistrictOpen &&
        districtButtonRef.current &&
        !districtButtonRef.current.contains(event.target as Node)
      ) {
        setIsDistrictOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isCityOpen, isDistrictOpen]);

  // 시/도 버튼 위치 계산
  useEffect(() => {
    if (isCityOpen && cityButtonRef.current) {
      const rect = cityButtonRef.current.getBoundingClientRect();
      setCityDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        zIndex: 10000,
      });
    }
  }, [isCityOpen]);

  // 시/군/구 버튼 위치 계산
  useEffect(() => {
    if (isDistrictOpen && districtButtonRef.current) {
      const rect = districtButtonRef.current.getBoundingClientRect();
      setDistrictDropdownStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        zIndex: 10000,
      });
    }
  }, [isDistrictOpen]);

  const handleCitySelect = (city: string) => {
    setRegion({ city, district: '' });
    setIsCityOpen(false);
  };

  const handleDistrictSelect = (district: string) => {
    setRegion({ city: region.city, district });
    setIsDistrictOpen(false);
  };

  return (
    <DropdownContainer>
      {/* 시/도 드롭다운 */}
      <Dropdown>
        <DropdownButton
          ref={cityButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsCityOpen((prev) => !prev);
          }}
        >
          {region.city || '시/도'}
          <img src={IconDown} alt="Arrow" />
        </DropdownButton>
        {isCityOpen &&
          createPortal(
            <DropdownList style={cityDropdownStyle}>
              {cities.map((city, index) => (
                <DropdownItem key={index} onClick={() => handleCitySelect(city)}>
                  {city}
                </DropdownItem>
              ))}
            </DropdownList>,
            document.body,
          )}
      </Dropdown>

      {/* 시/군/구 드롭다운 */}
      <Dropdown>
        <DropdownButton
          ref={districtButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            if (region.city) {
              setIsDistrictOpen((prev) => !prev);
            }
          }}
          disabled={!region.city}
        >
          {region.district || '시/군/구'}
          <img src={IconDown} alt="Arrow" />
        </DropdownButton>
        {isDistrictOpen &&
          region.city &&
          ReactDOM.createPortal(
            <DropdownList style={districtDropdownStyle}>
              {districtsMap[region.city]?.map((district, index) => (
                <DropdownItem key={index} onClick={() => handleDistrictSelect(district)}>
                  {district}
                </DropdownItem>
              ))}
            </DropdownList>,
            document.body,
          )}
      </Dropdown>
    </DropdownContainer>
  );
};

export default RegionDropdown;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 10px;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray2 : theme.colors.white};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray5 : theme.colors.gray8)};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  img {
    width: 12px;
    height: 12px;
  }
`;

const DropdownList = styled.ul`
  background: white;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;
