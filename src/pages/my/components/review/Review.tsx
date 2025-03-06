import IconStarYellow from '@icon/icon-star-yellow.svg';
import IconStarGray from '@icon/icon-star-gray.svg';
import styled from 'styled-components';
import { useHandleToggle } from '@my/feature/useHandleToggle.ts';

interface ReviewProps {
  nickname: string;
  content: string;
  profileImage: string;
  rate: number;
  imageList: string[];
  createdAt: string;
}

const Review = ({ nickname, content, profileImage, rate, imageList, createdAt }: ReviewProps) => {
  const { isOn, handleToggle } = useHandleToggle();
  const arr = Array.from({ length: 5 }, (_, i) => i);
  return (
    <ReviewContainer>
      <ReviewRateContainer>
        {arr.map((_, index) => (
          <img key={index} src={rate >= index + 1 ? IconStarYellow : IconStarGray} alt="" />
        ))}
      </ReviewRateContainer>
      <ReviewContent $isOn={isOn}>{content}</ReviewContent>
      <ReviewShort onClick={handleToggle}>{isOn ? '간략히 보기' : '더보기'}</ReviewShort>
      {/*리뷰 이미지 목록*/}
      <ReviewImageContainer>
        {imageList.map((image, index) => <img key={index} src={image} alt="" />)}
      </ReviewImageContainer>
      {/*리뷰 작성자*/}
      <ReviewerContainer>
        <ReviewerImage src={profileImage} alt="" />
        <ReviewerInfoContainer>
          <p>{nickname}</p>
          <div />
          <p>{createdAt}</p>
        </ReviewerInfoContainer>
      </ReviewerContainer>
    </ReviewContainer>
  );
};

export default Review;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e5e5;
  padding: 16px 0 24px 0;
`;

const ReviewRateContainer = styled.div`
  display: flex;
  padding: 0 20px;
`;

const ReviewContent = styled.p<{ $isOn: boolean }>`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
  margin-top: 6px;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isOn }) => ($isOn ? null : 2)};
  -webkit-box-orient: vertical;
  overflow: ${({ $isOn }) => ($isOn ? 'visible' : 'hidden')};
  text-overflow: ellipsis;
  padding: 0 20px;
`;

const ReviewShort = styled.p`
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: ${({ theme }) => theme.colors.gray5};
  margin-top: 4px;
  padding: 0 20px;
`;

const ReviewerContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  padding: 0 20px;
`;

const ReviewImageContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 0 20px;
  scroll-behavior: smooth;

  img {
    margin-top: 16px;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
    width: 35%;
  }
`;

const ReviewerImage = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const ReviewerInfoContainer = styled.div`
  display: flex;
  gap: 6px;
  height: fit-content;
  align-items: center;

  div {
    height: 100%;
    width: 1px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: ${({ theme }) => theme.colors.gray4};
  }

  p {
    font: ${({ theme }) => theme.fonts.caption_10px_medium};
    color: ${({ theme }) => theme.colors.gray6};
  }
`;
