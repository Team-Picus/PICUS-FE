import React from 'react';
import styled from 'styled-components';

interface FilterTagProps {
  isTodayAvailable: boolean;
}

const FilterTag: React.FC<FilterTagProps> = ({ isTodayAvailable }) => {
  return (
    <TagListContainer>
      {isTodayAvailable && (
        <TagContainer>당일가능</TagContainer>
      )}
    </TagListContainer>
  );
};

export default FilterTag;

const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  background-color: ${({ theme }) => theme.colors.tag3};
  color: ${({ theme }) => theme.colors.main1};
  border-radius: 2px;
`;
