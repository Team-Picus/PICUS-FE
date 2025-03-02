import IconQuestion from '@icon/icon-question.svg';
import styled, { css } from 'styled-components';
import { useHandleGuide } from '@my/feature/useHandleGuide.ts';

const BannerLabel = () => {
  const { showGuide, isVisible, handleGuide } = useHandleGuide();
  return (
    <div>
      <BannerImageSection>
        <BannerLabelText>에디터 추천</BannerLabelText>
        <img src={IconQuestion} alt="" onClick={handleGuide} />
      </BannerImageSection>
      {showGuide && (
        <BannerGuide $isVisible={isVisible}>
          {`PICUS에서 자체적으로 작가별 활동이 가장 많은 게시물을 보여\n주는 구간입니다.`}
        </BannerGuide>
      )}
    </div>
  );
};

export default BannerLabel;

const BannerGuide = styled.div<{ $isVisible: boolean }>`
  width: 92%;
  z-index: 100;
  position: absolute;
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: ${({ theme }) => theme.colors.gray10};
  padding: 12px 12px 25px 12px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  white-space: pre-wrap;

  /* 초기값: 투명하게(숨김) */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  /* isVisible이 true일 때 서서히 보이기 */
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
    `}
`;

const BannerLabelText = styled.p`
  color: ${({ theme }) => theme.colors.gray10};
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
`;

const BannerImageSection = styled.div`
  display: flex;
  gap: 2px;
`;
