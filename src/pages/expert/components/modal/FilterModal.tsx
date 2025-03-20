import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import IconClose from '@icon/icon-close.svg';
import ModalTabs from '@expert/components/modal/ModalTabs.tsx';
import IconRefresh from '@icon/icon-refresh.svg';
import IconFilterClose from '@icon/icon-filter-close.svg';
import { useFilterStore } from '@expert/features/store/useFilterStore.ts';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  activeCategory: string | null;
}

const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onClose, activeCategory }) => {
  const {
    price,
    region,
    isOutdoor,
    themes,
    removeTheme,
    resetFilters,
    setPrice,
    setRegion,
    setIsOutdoor,
  } = useFilterStore();

  const handleApplyClick = () => {
    onClose();
  };

  // 각 필터를 객체 형태로 반환하여 어떤 타입의 필터인지 식별할 수 있게 함
  const getFilterTags = () => {
    const tags: { type: string; label: string }[] = [];
    if (price) {
      tags.push({
        type: 'price',
        label: typeof price === 'string' ? price : `₩${price.min} ~ ₩${price.max}`,
      });
    }
    if (region.city) {
      tags.push({
        type: 'region',
        label: region.district ? `${region.city} ${region.district}` : region.city,
      });
    }
    if (isOutdoor !== null) {
      tags.push({
        type: 'isOutdoor',
        label: isOutdoor === true ? '외부 촬영' : '개인 스튜디오',
      });
    }
    return tags;
  };

  // 각 필터 타입에 맞게 제거하는 함수
  const handleRemoveFilter = (type: string) => {
    switch (type) {
      case 'price':
        setPrice(null);
        break;
      case 'region':
        setRegion({ city: '', district: '' });
        break;
      case 'isOutdoor':
        setIsOutdoor(null);
        break;
      default:
        break;
    }
  };

  return (
    <ReactModal
      isOpen={isVisible}
      onRequestClose={onClose}
      contentLabel="Filter Modal"
      ariaHideApp={false}
      style={customModalStyles}
    >
      <ContentSection>
        <TitleSection>
          <Title>필터</Title>
          <CloseButton onClick={onClose}>
            <img src={IconClose} alt="Close" />
          </CloseButton>
        </TitleSection>

        <SelectedFilters>
          {getFilterTags().map((filterObj, index) => (
            <FilterTag key={index}>
              {filterObj.label}
              <img
                src={IconFilterClose}
                alt="Remove"
                onClick={() => handleRemoveFilter(filterObj.type)}
              />
            </FilterTag>
          ))}
          {themes.map((theme, index) => (
            <FilterTag key={index}>
              {theme}
              <img src={IconFilterClose} alt="Remove" onClick={() => removeTheme(theme)} />
            </FilterTag>
          ))}
        </SelectedFilters>

        <TabSection>
          <ModalTabs activeCategory={activeCategory} />
        </TabSection>

        <ApplySection>
          <ResetButton onClick={resetFilters}>
            <img src={IconRefresh} alt="Reset" />
            초기화
          </ResetButton>
          <ApplyButton onClick={handleApplyClick}>적용하기</ApplyButton>
        </ApplySection>
      </ContentSection>
    </ReactModal>
  );
};

export default FilterModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100vh',
    zIndex: '100',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '100%',
    maxWidth: '440px',
    height: '70vh',
    zIndex: '100',
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px 20px 0 0',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
};

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TabSection = styled.div`
  width: 100%;
  padding-bottom: 5vh;
  overflow-y: auto;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  position: relative;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: #484848;
  margin: 0;
  text-align: center;
  flex-grow: 1;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  img {
    width: 100%;
  }
`;

const ApplySection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  bottom: 0;
  position: fixed;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ResetButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  border: 1px solid ${({ theme }) => theme.colors.main1};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main1};
  gap: 5px;
  padding: 10px 3px;
  width: 20%;
  border-radius: 4px;
  cursor: pointer;
`;

const ApplyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  border: 1px solid ${({ theme }) => theme.colors.main1};
  background-color: ${({ theme }) => theme.colors.main1};
  color: ${({ theme }) => theme.colors.white};
  width: 80%;
  border-radius: 4px;
  cursor: pointer;
`;

const SelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0;
`;

const FilterTag = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background2};
  color: ${({ theme }) => theme.colors.gray8};
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  cursor: pointer;
  gap: 5px;

  img {
    cursor: pointer;
  }
`;
