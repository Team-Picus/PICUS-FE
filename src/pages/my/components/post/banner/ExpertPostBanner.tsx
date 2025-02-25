import styled from 'styled-components';
import BannerInfo from '@my/components/post/banner/BannerInfo.tsx';
import BannerLabel from '@my/components/post/banner/BannerLabel.tsx';

const ExpertPostBanner = () => {
  return (
    <BannerContainer>
      <BannerLabel />
      <BannerInfo />
    </BannerContainer>
  );
};

export default ExpertPostBanner;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 24px 16px;
  gap: 12px;
`;
