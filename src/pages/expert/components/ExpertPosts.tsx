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
          categories={['당일가능', '가격', '지역', '테마']}
          onChange={setFilters}
          posts={posts}
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
  height: auto;
  padding: 16px 0;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
`;
