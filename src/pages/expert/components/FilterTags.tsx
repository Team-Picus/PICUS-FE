import React, { useState } from 'react';
import styled from 'styled-components';
import IconToday from '@icon/icon-today.svg';
import IconTodayClick from '@icon/icon-today-click.svg';
import IconSlash from '@icon/icon-expert-slash.svg';
import IconFilter from '@icon/icon-filter.svg';
import IconDown from '@icon/icon-down.svg';
import FilterModal from '@expert/components/modal/FilterModal.tsx';
import { useControlModal } from '@expert/features/hooks/useControlModals.ts';
import { useGetFilterTags } from '@expert/features/hooks/useGetFilterTags.ts';

const FilterTags: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { modalState, openModal, closeModal } = useControlModal();
  const filterTags = useGetFilterTags();

  const handleIsTodayAvailable = () => {
    setActiveTag('당일가능');
  };

  const handleTagClick = (category: string) => {
    setActiveTag(category);
    openModal();
  };

  const handleModalClose = () => {
    setActiveTag(null); // 모달을 닫을 때 activeTag를 null로 리셋
    closeModal();
  };

  return (
    <Container>
      <ScrollableTags>
        <Tag $active={activeTag === '당일가능'} onClick={handleIsTodayAvailable}>
          <img src={activeTag === '당일가능' ? IconTodayClick : IconToday} alt="Today" />
          {'당일가능'}
        </Tag>
        <Slash>
          <img src={IconSlash} alt="Slash" />
        </Slash>
        {filterTags.map((filter, index) => (
          <Tag
            key={index}
            $active={filter.isApplied}
            onClick={() => handleTagClick(filter.category)}
          >
            {filter.value}
            <img src={IconDown} alt="Down" />
          </Tag>
        ))}
      </ScrollableTags>
      <FilterIcon onClick={openModal}>
        <img src={IconFilter} alt="Filter" />
      </FilterIcon>
      <FilterModal isVisible={modalState} onClose={handleModalClose} activeCategory={activeTag} />
    </Container>
  );
};

export default FilterTags;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
`;

const ScrollableTags = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 6px;

  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%);
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 2%);
`;

const Tag = styled.div<{ $active: boolean }>`
  display: flex;
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: 16px;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  transition: background-color 0.3s;

  background-color: ${({ $active, theme }) => ($active ? theme.colors.main1 : theme.colors.gray1)};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.gray7)};
  border: solid 1px ${({ $active, theme }) => ($active ? theme.colors.main1 : '#e0e0e0')};
  gap: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Slash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
`;

const FilterIcon = styled.div`
  padding: 0 20px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
