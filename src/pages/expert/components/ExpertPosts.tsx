import React, { useState, useEffect } from 'react';
import ExpertPostsList from './ExpertPostsList';
import FilterTags from './FilterTags';
import { Post } from '@shared/types';
import { expertPosts } from '@shared/apis/expert/mocks';
import PostHeader from '@expert/components/PostHeader.tsx';
import styled from 'styled-components';

const ExpertPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(expertPosts);
  const [filters, setFilters] = useState<{ category: string[] }>({ category: [] });

  useEffect(() => {
    const filteredPosts = expertPosts.filter(
      (post) =>
        filters.category.length === 0 || post.tags.some((tag) => filters.category.includes(tag)),
    );
    setPosts(filteredPosts);
  }, [filters]);

  return (
    <Container>
      <PostHeader totalPosts={3451} />
      <StickyWrapper>
        <FilterTags
          categories={['당일가능', '지역', '테마', '바보', '멍청이', '멋쟁이']}
          onChange={setFilters}
        />
      </StickyWrapper>
      <ScrollWrapper>
        <ExpertPostsList posts={posts} />
      </ScrollWrapper>
    </Container>
  );
};

export default ExpertPosts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 16px 20px;
  overflow: hidden;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10; /* 필터가 다른 콘텐츠 위로 오도록 */
  width: 100%;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: calc(100vh - 160px); /* 100vh에서 상단 헤더와 필터 크기를 제외한 높이 */
  overflow-y: auto;
  padding: 10px 0;
`;
