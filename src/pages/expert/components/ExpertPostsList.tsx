import React from 'react';
import styled from 'styled-components';
import ExpertPostItem from './ExpertPostItem';
import { Post } from '@shared/types';

interface ExpertPostsListProps {
  posts: Post[];
}

const ExpertPostsList: React.FC<ExpertPostsListProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <ExpertPostItem key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default ExpertPostsList;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;
