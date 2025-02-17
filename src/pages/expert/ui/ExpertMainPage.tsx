import ExpertAppBar from '@shared/ui/ExpertAppBar.tsx';
import RecentPosts from '@expert/components/RecentPosts.tsx';
import ExpertPosts from '@expert/components/ExpertPosts.tsx';

export const ExpertMainPage = () => {
  return (
    <>
      <ExpertAppBar />
      <RecentPosts />
      <ExpertPosts />
    </>
  );
};
