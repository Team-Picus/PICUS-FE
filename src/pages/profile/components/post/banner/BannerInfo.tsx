import IcHeart from '@icon/icon-heart.svg';
import styled from 'styled-components';
import ImgBannerExample from '@img/img-banner-example.png';

const BannerInfo = () => {
  return (
    <BannerInfoContainer>
      <BannerCaption>당일가능</BannerCaption>
      <BannerInfoInner>
        <BannerTitleText>낙원(樂園)</BannerTitleText>
        <BannerInfoSection>
          <Content>
            <img src={IcHeart} alt="" />
            <BannerMediumText>41</BannerMediumText>
          </Content>
          <Circle />
          <Content>
            <BannerMediumText>후기</BannerMediumText>
            <BannerMediumText>41</BannerMediumText>
          </Content>
          <Circle />
          <Content>
            <BannerMediumText>기본</BannerMediumText>
            <BannerMediumText>80,000</BannerMediumText>
          </Content>
        </BannerInfoSection>
      </BannerInfoInner>
    </BannerInfoContainer>
  );
};

export default BannerInfo;

const BannerInfoContainer = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 100%), url(${ImgBannerExample});
  background-size: cover;
  background-position: center;
  padding: 8px 8px 16px 8px;
  border-radius: 6px;
`;

const BannerCaption = styled.div`
  width: fit-content;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.main1};
  background-color: ${({ theme }) => theme.colors.tag3};
  border-radius: 2px;
  padding: 2px 4px;
`;

const BannerInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 4px;
`;

const BannerInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const BannerTitleText = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: ${({ theme }) => theme.colors.white};
`;

const BannerMediumText = styled.div`
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.gray6};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

const Circle = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray5};
`;
