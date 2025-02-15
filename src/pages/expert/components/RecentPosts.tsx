import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecentItem from './RecentItem';
import { posts } from '@shared/apis/expert/mocks.ts';

interface RecentPost {
  image: string;
  title: string;
  logo: string;
}

const RecentPosts: React.FC = () => {
  const [postsData, setPostsData] = useState<RecentPost[]>([]);

  useEffect(() => {
    setPostsData(posts);
  }, []);

  return (
    <Wrapper>
      <Title>최근 관심 게시물</Title>
      <PostsContainer>
        {postsData.map((post, index) => (
          <RecentItem key={index} image={post.image} title={post.title} logo={post.logo} />
        ))}
      </PostsContainer>
    </Wrapper>
  );
};

export default RecentPosts;

const Wrapper = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 258px;
  border-bottom: 12px solid #f5f6ff;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
`;

const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 237px;
  align-items: flex-start;
  overflow-x: scroll;
  gap: 20px;
  margin-top: 12px;
`;
