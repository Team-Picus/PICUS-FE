import styled from 'styled-components';
import { ExpertStatusType } from '@my/feature/types/status.ts';
import IconExpertApproval from '@icon/icon-expert-approval.svg';
import IconExpertReject from '@icon/icon-expert-reject.svg';

interface ExpertStatusProps {
  expertStatus: ExpertStatusType;
}

const ExpertStatus = ({ expertStatus }: ExpertStatusProps) => {
  const isRejected = expertStatus === ExpertStatusType.NONE;
  return (
    <Container $isRejected={isRejected}>
      <img src={isRejected ? IconExpertReject : IconExpertApproval} alt="" />
      <p>작가 승인 완료</p>
    </Container>
  );
};

export default ExpertStatus;

const Container = styled.div<{ $isRejected?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 16px;
  gap: 4px;
  box-shadow: 0 0 7px 0 #d8dcf180;

  p {
    font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
    color: ${({ theme, $isRejected }) => ($isRejected ? '#ff5d52' : theme.colors.main1)};
  }
`;
