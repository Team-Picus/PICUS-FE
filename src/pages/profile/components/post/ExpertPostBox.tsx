import styled from 'styled-components';
import { categories, postList } from '@shared/apis/mock/my.ts';
import TodayAvailable from '@pages/profile/components/post/list/TodayAvailable.tsx';
import ExpertPostBanner from '@pages/profile/components/post/banner/ExpertPostBanner.tsx';
import Category from '@pages/profile/components/post/list/Category.tsx';
import ExpertPost from '@pages/profile/components/post/list/ExpertPost.tsx';
import { MemberRole, useMemberRoleStore } from '@shared/store/useMemberRoleStore.ts';
import PostFilter from '@pages/profile/components/post/list/PostFilter.tsx';

const ExpertPostBox = () => {
  const { memberRole } = useMemberRoleStore();
  return (
    <ExpertPostBoxContainer>
      <ExpertPostBanner />
      <Divider />
      <PostSection>
        <PostTopSection>
          <PostTitle>게시물<span>14</span></PostTitle>
          {memberRole === MemberRole.EXPERT ? <TodayAvailable /> : <PostFilter />}
        </PostTopSection>
        <FilterSection>
          {categories.map((category, index) => (
            <Category key={index} category={category.category} count={category.count} />
          ))}
        </FilterSection>
        <PostListContainer>
          {postList.map((post, index) => (
            <ExpertPost key={index} {...post} />
          ))}
        </PostListContainer>
      </PostSection>
    </ExpertPostBoxContainer>
  );
};

export default ExpertPostBox;

const ExpertPostBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 12px;
  background-color: ${({ theme }) => theme.colors.background2};
`;

const PostTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 16px 2px 20px;
  margin-top: 20px;
`;

const FilterSection = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 0 16px 0 16px;
  margin-top: 16px;
`;

const PostTitle = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
  color: ${({ theme }) => theme.colors.gray10};

  span {
    font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
    color: ${({ theme }) => theme.colors.gray7};
    margin-left: 4px;
  }
`;

const PostSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PostListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 16px 16px 16px;

  & > * {
    flex: 0 0 calc(50% - 6px);
    box-sizing: border-box;
  }
`;
