import ExpertAppBar from '@shared/ui/ExpertAppBar.tsx';
import RecentPosts from '@expert/components/RecentPosts.tsx';
import ExpertPosts from '@expert/components/ExpertPosts.tsx';
import styled from 'styled-components';

export const ExpertMainPage = () => {
  return (
    <Container>
      <ExpertAppBar />
      <RecentPosts />
      <ExpertPosts />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
