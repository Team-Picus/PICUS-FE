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
  const { price, region, themes, removeTheme, resetFilters } = useFilterStore();

  const handleApplyClick = () => {
    onClose();
  };

  // 선택된 필터 UI에 보여질 태그 리스트 생성
  const getFilterTags = () => {
    const tags: string[] = [];

    if (price) {
      tags.push(typeof price === 'string' ? price : `₩${price.min} ~ ₩${price.max}`);
    }

    if (region.city) {
      tags.push(region.district ? `${region.city} ${region.district}` : region.city);
    }

    if (region.isOutdoor) {
      tags.push('외부 촬영');
    }

    return tags;
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
          {getFilterTags().map((filter, index) => (
            <FilterTag key={index}>
              {filter}
              <img src={IconFilterClose} alt="Remove" onClick={() => resetFilters()} />
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
    zIndex: '10',
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
