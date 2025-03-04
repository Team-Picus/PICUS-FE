import IconArrowBottom from '@icon/icon-arrow-bottom.svg';
import IconArrowTop from '@icon/icon-arrow-top.svg';
import styled from 'styled-components';
import { useHandlePostFilter } from '@my/feature/useHandlePostFilter.ts';

const PostFilter = () => {
  const { isOn, filter, filterItems, changeFilter, handleToggle } = useHandlePostFilter();

  return (
    <PostFilterContainer onClick={handleToggle}>
      <PostFilterInner>
        <FilterTitle>{filter}</FilterTitle>
        <img src={isOn ? IconArrowTop : IconArrowBottom} alt="" />
      </PostFilterInner>
      {isOn && (
        <FilterItemsContainer>
          {filterItems.map((item, index, array) => (
            <p key={index} onClick={() => changeFilter(array[index])}>
              {item}
            </p>
          ))}
        </FilterItemsContainer>
      )}
    </PostFilterContainer>
  );
};

export default PostFilter;

const PostFilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PostFilterInner = styled.div`
  display: flex;
  padding: 2px 8px;
  gap: 2px;
`;

const FilterTitle = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
`;

const FilterItemsContainer = styled.div`
  width: 175px;
  margin-top: 8px;
  left: -80px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    position: relative;
    overflow: hidden;
    padding: 13px 16px;
    font: ${({ theme }) => theme.fonts.body_14px_medium};
    color: #888888;
    cursor: pointer;

    &:hover {
      color: #333;
    }

    /* 가상 요소: 확장될 원 */

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #f5f5f5;
      transform: translate(-50%, -50%);
      opacity: 0.6;
    }

    &:hover::before {
      animation: ripple 0.6s ease-out forwards;
    }
  }

  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.6;
    }
    100% {
      width: 250%;
      height: 250%;
      opacity: 0;
    }
  }
`;
