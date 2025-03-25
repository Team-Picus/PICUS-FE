import MyProfileContent from '@my/components/MyProfileContent.tsx';
import UserAction from '@my/components/UserAction.tsx';
import MyAppBar from '@my/components/MyAppBar.tsx';

export const MyPage = () => {
  return (
    <>
      <MyAppBar />
      <MyProfileContent />
      <UserAction />
    </>
  );
};
