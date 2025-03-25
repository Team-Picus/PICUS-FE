import MyInfo from '@my/components/MyInfo.tsx';
import UserSummaryCard from '@my/components/UserSummaryCard.tsx';
import ExpertStatus from '@my/components/ExpertStatus.tsx';
import styled from 'styled-components';
import ExpertApprove from '@my/components/ExpertApprove.tsx';
import { ExpertStatusType } from '@my/feature/types/status.ts';

// 임시 프롭스 타입 - 제거 예정
interface MyProfileContentProps {
  expertStatus?: ExpertStatusType;
}

const MyProfileContent = ({ expertStatus = ExpertStatusType.COMPLETE }: MyProfileContentProps) => {
  return (
    <Container>
      <MyInfo />
      <UserSummaryCard />
      {expertStatus === ExpertStatusType.NONE ? <ExpertApprove /> : <ExpertStatus expertStatus={expertStatus} />}
    </Container>
  );
};

export default MyProfileContent;

const Container = styled.div`
  padding: 20px 16px;
`;
