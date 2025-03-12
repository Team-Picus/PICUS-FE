import React from 'react';
import styled from 'styled-components';
import ExpertPostFilter from '@expert/components/ExpertPostFilter.tsx';

interface PostHeaderProps {
  totalPosts: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({ totalPosts }) => {
  return (
    <Container>
      <TitleSection>
        <Title>게시물</Title>
        <TotalNumber>{totalPosts.toLocaleString()}</TotalNumber>
      </TitleSection>
      <ExpertPostFilter />
    </Container>
  );
};

export default PostHeader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 20px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.headline_18px_semibold};
`;

const TotalNumber = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle_14px_semibold};
  color: #8a8a8a;
`;
