import styled from 'styled-components';

const stacks = ['React', 'TypeScript', 'Styled-components'];
const region = ['서울시 송파구', '성남시 수정구'];

const ExpertInfo = () => {
  return (
    <ExpertInfoContainer>
      <ExpertInfoLabel>작가 정보</ExpertInfoLabel>
      <ExpertInfoSection>
        <ExpertInfoItemWrapper>
          <InfoType>활동 분야</InfoType>
          <InfoContent>사진작가</InfoContent>
        </ExpertInfoItemWrapper>
        <ExpertInfoItemWrapper>
          <InfoType>활동 경력</InfoType>
          <InfoContent>n년차</InfoContent>
        </ExpertInfoItemWrapper>
        <ExpertInfoItemWrapper>
          <InfoType>보유 기술</InfoType>
          <ContentWrapper>
            {stacks.map((stack, index) => (
              <InfoContent key={index}>{stack}</InfoContent>
            ))}
          </ContentWrapper>
        </ExpertInfoItemWrapper>
        <ExpertInfoItemWrapper>
          <InfoType>활동 지역</InfoType>
          <ContentWrapper>
            {region.map((stack, index) => (
              <InfoContent key={index}>{stack}</InfoContent>
            ))}
          </ContentWrapper>
        </ExpertInfoItemWrapper>
      </ExpertInfoSection>
      <Divider />
      <ExpertInfoLabel>스튜디오</ExpertInfoLabel>
      <ExpertInfoSection>
        <ExpertInfoItemWrapper>
          <InfoType>네임</InfoType>
          <InfoContent>스튜디오 이름</InfoContent>
        </ExpertInfoItemWrapper>
        <ExpertInfoItemWrapper>
          <InfoType>주소</InfoType>
          <InfoContent>서울시 송파구 00동 00길 182-17</InfoContent>
        </ExpertInfoItemWrapper>
      </ExpertInfoSection>
      <Divider style={{ height: '38px' }} />
    </ExpertInfoContainer>
  );
};

export default ExpertInfo;

const ExpertInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ExpertInfoLabel = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: ${({ theme }) => theme.colors.gray10};
  margin-top: 20px;
  margin-left: 20px;
`;

const ExpertInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 28px;
`;

const ExpertInfoItemWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const InfoType = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray6};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoContent = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray9};
`;

const Divider = styled.div`
  height: 12px;
  background-color: ${({ theme }) => theme.colors.background2};
`;
