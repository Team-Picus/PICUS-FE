import AppBar from '@shared/ui/AppBar.tsx';
import { HeaderAction } from '@shared/types';
import IcHamburger from '@icon/icon-hamburger.svg';
import styled from 'styled-components';
import ExpertTabs from '@pages/profile/components/ExpertTabs.tsx';
import ExpertProfile from '@pages/profile/components/profile/ExpertProfile.tsx';

export const ExpertDetailPage = () => {
  const rightHeaderActions: HeaderAction[] = [
    {
      icon: IcHamburger,
      onClick: () => undefined,
    },
  ];

  return (
    <Container>
      <AppBar rightHeaderActionArr={rightHeaderActions} />
      <ExpertProfile />
      <ExpertTabs />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;
