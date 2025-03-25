import { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '@pages/profile/components/post/list/ToggleButton.tsx';

const TodayAvailable = () => {
  const [todayAvailable, setTodayAvailable] = useState(false);
  return (
    <>
      {todayAvailable ? (
        <TodayAvailableWrapper>
          <All>전체 적용</All>
          <ToggleButton />
          <Cancel onClick={() => setTodayAvailable(false)}>취소</Cancel>
          <Save onClick={() => setTodayAvailable(false)}>저장</Save>
        </TodayAvailableWrapper>
      ) : (
        <PostSetting onClick={() => setTodayAvailable(true)}>당일가능 설정</PostSetting>
      )}
    </>
  );
};

export default TodayAvailable;

const TodayAvailableWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const All = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.main1};
  margin-right: 8px;
`;

const Cancel = styled.p`
  color: ${({ theme }) => theme.colors.tag1};
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  padding: 0 8px;
  margin-left: 12px;
`;

const Save = styled.p`
  color: ${({ theme }) => theme.colors.main1};
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  padding: 0 8px;
`;

const PostSetting = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.tag1};
  padding: 2px 0;
`;
