import React from 'react';
import styled from 'styled-components';
import IconDropdown from '@icon/icon-dropdown.svg';

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
      <FilterMenu>
        <p>최근 활동 순 </p>
        <img src={IconDropdown}></img>
      </FilterMenu>
    </Container>
  );
};

export default PostHeader;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
  padding: 0 4px;
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

const FilterMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  cursor: pointer;
  p {
    font: ${({ theme }) => theme.fonts.body_14px_medium};
    color: #6d6d6d;
  }
`;
