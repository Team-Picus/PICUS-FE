import React, { useState } from 'react';
import styled from 'styled-components';
import IconToday from '@icon/icon-expert-today.svg';
import IconSlash from '@icon/icon-expert-slash.svg';
import IconFilter from '@icon/icon-filter.svg';
import IconDown from '@icon/icon-down.svg';
import { Post } from '@shared/types';

interface FilterTagsProps {
  onChange: (filters: { category: string[] }) => void;
  categories: string[];
  posts: Post[];
}

const FilterTags: React.FC<FilterTagsProps> = ({ onChange, categories, posts }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = (category: string) => {
    setActiveTag(category);
    if (category === '당일가능') {
      const filteredPosts = posts.filter((post) => post.isTodayAvailable);
      onChange({ category: filteredPosts.map((post) => post.title) });
    } else {
      // setShowModal(true); 나중에 모달 추가히면 넣을 로직
    }
  };

  const filteredCategories = categories.filter((category) => category !== '당일가능');

  return (
    <Container>
      <ScrollableTags>
        <Tag $active={activeTag === '당일가능'} onClick={() => handleTagClick('당일가능')}>
          <img src={IconToday} alt={IconToday} />
          {'당일가능'}
        </Tag>
        <Slash>
          <img src={IconSlash} alt={IconSlash} />
        </Slash>
        {filteredCategories.map((category, index) => (
          <Tag key={index} $active={activeTag === category} onClick={() => handleTagClick(category)}>
            {category}
            <img src={IconDown} alt={IconDown} />
          </Tag>
        ))}
      </ScrollableTags>
      <FilterIcon>
        <img src={IconFilter} alt={IconFilter} />
      </FilterIcon>

      {/*/!* 필터 모달 *!/*/}
      {/*{showModal && (*/}
      {/*  <Modal>*/}
      {/*    <h3>필터를 선택하세요</h3>*/}
      {/*    /!* 모달에 필터 내용 추가 *!/*/}
      {/*    <button onClick={() => setShowModal(false)}>닫기</button>*/}
      {/*  </Modal>*/}
      {/*)}*/}
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 6px;

  /* 왼쪽 경계 흐림 */
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
  padding: 0 10px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

// // 모달 스타일
// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   padding: 20px;
//   z-index: 100;
//
//   button {
//     margin-top: 20px;
//     background-color: #ff6347;
//     color: white;
//     border: none;
//     padding: 10px;
//     cursor: pointer;
//
//     &:hover {
//       background-color: #ff4500;
//     }
//   }
// `;
