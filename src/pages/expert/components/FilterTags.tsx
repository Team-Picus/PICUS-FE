import React from 'react';
import styled from 'styled-components';
import IconToday from '@icon/icon-expert-today.svg';
import IconSlash from '@icon/icon-expert-slash.svg';
import IconFilter from '@icon/icon-filter.svg';

interface FilterTagsProps {
  onChange: (filters: { category: string[] }) => void;
  categories: string[];
}

const FilterTags: React.FC<FilterTagsProps> = ({ onChange, categories }) => {
  const handleTagClick = (category: string) => {
    onChange({ category: [category] });
  };

  return (
    <Container>
      <ScrollableTags>
        <FixedTag>
          <img src={IconToday} alt={IconToday}></img>
          {categories[0]}
        </FixedTag>
        <Slash>
          <img src={IconSlash} alt={IconSlash}></img>
        </Slash>
        {categories.map((category, index) => (
          <Tag key={index} onClick={() => handleTagClick(category)}>
            {category}
          </Tag>
        ))}
      </ScrollableTags>
      <FilterIcon>
        <img src={IconFilter} alt={IconFilter} />
      </FilterIcon>
    </Container>
  );
};

export default FilterTags;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6vh;
`;

const FixedTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 2px;
  padding: 6px 10px;
  border-radius: 16px;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  background-color: #f8f8f8;
  color: #888a9e;
  border: solid 1px #e0e0e0;
`;

const Slash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
`;

const ScrollableTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 5px;

  ///* 왼쪽 경계 흐림 */
  //mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%);
  //-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%);
`;

const Tag = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: 16px;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  transition: background-color 0.3s;
  background-color: #f8f8f8;
  color: #888a9e;
  border: solid 1px #e0e0e0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const FilterIcon = styled.div`
  padding: 0 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 23px;
  }
`;
