import styled from 'styled-components';
import IconFolderCheck from '@icon/icon-folder-check.svg';
import IconFolderCheckFill from '@icon/icon-folder-check-fill.svg';
import Review from '@my/components/review/Review.tsx';
import { reviews } from '@shared/apis/mock/my.ts';
import { useState } from 'react';

const ExpertReviewBox = () => {
  const [isSortedLately, setIsSortedLately] = useState(true);
  const [isOnlyPhoto, setIsOnlyPhoto] = useState(false);
  return (
    <ReviewBoxContainer>
      <ReviewTopSection>
        <ReviewLabel>후기<span>24</span></ReviewLabel>
        <ToggleSection onClick={() => setIsOnlyPhoto(!isOnlyPhoto)}>
          <img src={ isOnlyPhoto ? IconFolderCheckFill : IconFolderCheck} alt="" />
          <TextMedium>사진 리뷰만</TextMedium>
        </ToggleSection>
      </ReviewTopSection>
      <OptionSection>
        <Option $isActive={isSortedLately} onClick={() => setIsSortedLately(true)}>
          <div />
          <p>최신순</p>
        </Option>
        <Option $isActive={!isSortedLately} onClick={() => setIsSortedLately(false)}>
          <div />
          <p>별점 높은순</p>
        </Option>
      </OptionSection>
      {/*리뷰 목록*/}
      <ReviewListContainer>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </ReviewListContainer>
    </ReviewBoxContainer>
  );
};

export default ExpertReviewBox;

const ReviewBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

const ReviewTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 20px;
`;

const ToggleSection = styled.div`
  display: flex;
  gap: 4px;
`;

const TextMedium = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
`;

const ReviewLabel = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: ${({ theme }) => theme.colors.gray10};

  span {
    font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
    color: ${({ theme }) => theme.colors.gray7};
    margin-left: 4px;
  }
`;

const OptionSection = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 20px;
  margin-top: 16px;
`;

const Option = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.tag1 : theme.colors.gray5};
  }

  p {
    font: ${({ theme }) => theme.fonts.body_14px_medium};
    color: ${({ theme, $isActive }) => $isActive ? theme.colors.gray9 : theme.colors.gray5};
  }
`;

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
