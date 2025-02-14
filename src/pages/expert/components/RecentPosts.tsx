import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecentItem from './RecentItem'; // RecentItem 컴포넌트 불러오기
import { posts } from '@shared/apis/expert/mocks.ts'; // mock 데이터 불러오기

interface Post {
  image: string;
  title: string;
  logo: string;
}

const RecentPosts: React.FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

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
  height: 246px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
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
