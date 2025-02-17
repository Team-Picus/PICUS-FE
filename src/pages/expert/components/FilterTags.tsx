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
      <FixedTag>
        <img src={IconToday} alt={IconToday}></img>
        {categories[0]}
      </FixedTag>
      <Slash>
        <img src={IconSlash} alt={IconSlash}></img>
      </Slash>
      <ScrollableTags>
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
    position: sticky;
    top: 0; /* 여기서 top을 설정하여 sticky가 정상적으로 작동하도록 함 */
    width: 100%;
    height: auto;
    background-color: white; /* 배경색을 설정하여 다른 요소와 구분 */
    z-index: 10; /* 다른 요소들보다 위에 오도록 설정 */
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
    padding: 0 8px;
`;

const ScrollableTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    overflow-x: auto;
    gap: 5px;
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
        background-color: #e0e0e0;
    }
`;

const FilterIcon = styled.div`
    padding: 10px 15px;
    cursor: pointer;
    img {
        width: 24px;
        height: 24px;
    }
`;