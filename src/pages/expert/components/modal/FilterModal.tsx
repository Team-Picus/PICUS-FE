import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import IconClose from '@icon/icon-close.svg';
import ModalTabs from '@expert/components/modal/ModalTabs.tsx';
import IconRefresh from '@icon/icon-refresh.svg';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  activeCategory: string | null;
}

const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onClose, activeCategory }) => {
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
        <TabSection>
          <ModalTabs activeCategory={activeCategory} />
        </TabSection>
        <ApplySection>
          <ResetButton>
            <img src={IconRefresh} alt={IconRefresh}></img>
            초기화
          </ResetButton>
          <ApplyButton>적용하기</ApplyButton>
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
    overflow: 'auto',
  },
};

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TabSection = styled.div`
  width: 100%;
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

  &:hover {
    background-color: #e9eaff;
  }
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

  &:hover {
    background-color: #3a5bda;
  }
`;
