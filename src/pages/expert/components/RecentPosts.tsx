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
    <Container>
      <Title>최근 관심 게시물</Title>
      <PostsSection>
        {postsData.map((post, index) => (
          <RecentItem key={index} image={post.image} title={post.title} logo={post.logo} />
        ))}
      </PostsSection>
    </Container>
  );
};

export default RecentPosts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0;
  width: 100%;
  border-bottom: 12px solid #f5f6ff;
`;

const Title = styled.p`
  padding: 0 20px;
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
`;

const PostsSection = styled.div`
  padding: 0 20px;
  margin-top: 16px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: 10px;
`;
