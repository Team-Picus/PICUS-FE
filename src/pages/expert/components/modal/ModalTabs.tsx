import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useControlTab } from '@expert/features/hooks/useControlTabs.ts';
import PriceBox from '@expert/components/modal/price/PriceBox.tsx';
import RegionBox from '@expert/components/modal/region/RegionBox.tsx';
import ThemeBox from '@expert/components/modal/theme/ThemeBox.tsx';

interface ModalTabsProps {
  activeCategory: string | null; // 가격, 지역, 테마 카테고리 중 하나
}

const ModalTabs: React.FC<ModalTabsProps> = ({ activeCategory }) => {
  const { activeTab, handleTab, tabRefs, indicatorStyle } = useControlTab();

  // activeCategory 따라 초기 탭을 설정
  useEffect(() => {
    if (activeCategory === '가격') {
      handleTab(1);
    } else if (activeCategory === '지역') {
      handleTab(2);
    } else if (activeCategory === '테마') {
      handleTab(3);
    }
  }, [activeCategory, handleTab]);

  return (
    <TabContainer>
      <TabWrapper>
        <Tab ref={tabRefs[0]} onClick={() => handleTab(1)} $isTab={activeTab === 1}>
          가격
        </Tab>
        <Tab ref={tabRefs[1]} onClick={() => handleTab(2)} $isTab={activeTab === 2}>
          지역
        </Tab>
        <Tab ref={tabRefs[2]} onClick={() => handleTab(3)} $isTab={activeTab === 3}>
          테마
        </Tab>
        <TabIndicator
          style={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
          }}
        />
      </TabWrapper>

      <TabBox>
        {activeTab === 1 && <PriceBox />}
        {activeTab === 2 && <RegionBox />}
        {activeTab === 3 && <ThemeBox />}
      </TabBox>
    </TabContainer>
  );
};

export default ModalTabs;

const TabContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div<{ $isTab: boolean }>`
  font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
  color: ${({ theme, $isTab }) => ($isTab ? theme.colors.main1 : theme.colors.gray6)};
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.main1};
  }
`;

const TabWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const TabIndicator = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.main1};
  transition:
    left 0.3s ease,
    width 0.3s ease;
`;

const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;
