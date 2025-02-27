import styled from 'styled-components';
import { useHandleTab } from '@my/feature/useHandleTab.ts';
import ExpertPostBox from '@my/components/post/ExpertPostBox.tsx';
import ExpertReviewBox from '@my/components/review/ExpertReviewBox.tsx';
import ExpertInfo from "@my/components/info/ExpertInfo.tsx";

const ExpertTabs = () => {
  const { activeTab, handleTab, tabRefs, indicatorStyle } = useHandleTab();
  return (
    <TabContainer>
      <TabWrapper>
        <Tab ref={tabRefs[0]} onClick={() => handleTab(1)} $isTab={1 == activeTab}>
          게시물
        </Tab>
        <Tab ref={tabRefs[1]} onClick={() => handleTab(2)} $isTab={2 == activeTab}>
          후기
        </Tab>
        <Tab ref={tabRefs[2]} onClick={() => handleTab(3)} $isTab={3 == activeTab}>
          정보
        </Tab>
      </TabWrapper>
      <TabIndicator
        style={{
          width: indicatorStyle.width,
          left: indicatorStyle.left,
        }}
      />
      <TabBox>
        {activeTab === 1 && <ExpertPostBox />}
        {activeTab === 2 && <ExpertReviewBox />}
        {activeTab === 3 && <ExpertInfo />}
      </TabBox>
    </TabContainer>
  );
};

export default ExpertTabs;

const TabContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div<{ $isTab: boolean }>`
  font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
  color: ${({ theme, $isTab }) => ($isTab ? theme.colors.main1 : theme.colors.gray6)};
  text-align: center;
  margin-top: 16px;
  padding: 0 35px 8px;
`;

const TabWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const TabIndicator = styled.div`
  position: relative;
  transform: translateX(-50%);
  height: 2px;
  background-color: ${({ theme }) => theme.colors.main1};
  transition:
    left 0.3s ease,
    width 0.3s ease;
`;

const TabBox = styled.div`
  display: flex;
  overflow-y: scroll;
`;
