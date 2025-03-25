import ImgMyProfile from '@img/img-my-profile.png';
import ImgMyExample from '@img/img-my-example.png';
import styled from 'styled-components';
import { MemberRole, useMemberRoleStore } from '@shared/store/useMemberRoleStore.ts';
import Like from '@pages/profile/components/profile/Like.tsx';

const ExpertProfile = () => {
  const { memberRole } = useMemberRoleStore();
  const chat = () => {};
  const editProfile = () => {};

  return (
    <ProfileInner>
      {/*프로필, 닉네임, 좋아요*/}
      <InfoSection>
        <ProfileImage src={ImgMyProfile} alt="" />
        <InfoBox>
          <ProfileName>usee_pic</ProfileName>
          <ProfileJob>스냅작가</ProfileJob>
        </InfoBox>
        <Like memberRole={memberRole} />
      </InfoSection>
      {/*평점, 활동, 마지막 활동*/}
      <LabelSection>
        <LabelInner>
          <TextLabel>평점</TextLabel>
          <TextSemibold>4.32</TextSemibold>
        </LabelInner>
        <VerticalLine />
        <LabelInner>
          <TextLabel>활동</TextLabel>
          <TextSemibold>32</TextSemibold>
        </LabelInner>
        <VerticalLine />
        <LabelInner>
          <TextLabel>마지막 활동</TextLabel>
          <TextSemibold>25.09.11</TextSemibold>
        </LabelInner>
      </LabelSection>
      {/*한 줄 소개, 인스타 아이디*/}
      <IntroSection>
        <TextMedium>찬란하고 청량한, 너만의 푸름을 위해</TextMedium>
        <TextMedium>@usee_pic_</TextMedium>
      </IntroSection>
      {/*버튼*/}
      <Button onClick={() => (MemberRole.EXPERT ? editProfile() : chat())}>
        {memberRole === MemberRole.EXPERT ? '프로필 편집' : '1:1 채팅'}
      </Button>
    </ProfileInner>
  );
};

export default ExpertProfile;

const ProfileInner = styled.div`
  display: flex;
  height: 65%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 16px;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0)), url(${ImgMyExample});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 4px;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 82px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileName = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileJob = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray4};
`;

const Button = styled.div`
  width: 100%;
  font: ${({ theme }) => theme.fonts.subtitle_14px_semibold};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  text-align: center;
  cursor: pointer;
`;

const LabelSection = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 6px;
`;

const LabelInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 12px;
  width: 100%;
`;

const VerticalLine = styled.div`
  width: 4px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 20px 0 24px 0;
`;

const TextLabel = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray5};
`;

const TextSemibold = styled.p`
  font: ${({ theme }) => theme.fonts.body_16px_semibold};
  color: ${({ theme }) => theme.colors.white};
`;

const TextMedium = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray2};
  padding: 0 12px;
`;
