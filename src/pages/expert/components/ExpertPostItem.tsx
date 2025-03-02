import React from 'react';
import styled from 'styled-components';
import { Post } from '@shared/types';
import IconDot from '@icon/icon-dot.svg';
import IconHeart from '@icon/icon-heart.svg';
import FilterTag from '@shared/ui/FilterTag.tsx';

interface ExpertPostItemProps {
  post: Post;
}

const ExpertPostItem: React.FC<ExpertPostItemProps> = ({ post }) => {
  return (
    <Container>
      <ImageSection>
        <ItemImage src={post.image} alt={post.title} />
        <TagsContainer>
          <FilterTag isTodayAvailable={post.isTodayAvailable} />
        </TagsContainer>
      </ImageSection>
      <FooterSection>
        <Name>{post.authorId}</Name>
        <Title>{post.title}</Title>
        <Price>{post.price.toLocaleString()}원</Price>
        <LikeAndViewSection>
          <Like>
            <img src={IconHeart} alt={'heart'} />
            {post.likes}
          </Like>
          <img src={IconDot} alt={'dot'} />
          <View>{post.views}명 보는 중</View>
        </LikeAndViewSection>
      </FooterSection>
    </Container>
  );
};

export default ExpertPostItem;

const Container = styled.div`
  flex-shrink: 0;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
`;

const ImageSection = styled.div`
  width: 100%;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TagsContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  gap: 5px;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 5px 0;
  width: 100%;
`;

const Name = styled.p`
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: #807f7f;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: #2e2e2e;
`;

const Price = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
  color: #131313;
`;

const LikeAndViewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 5px;
`;

const Like = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: #919191;
`;

const View = styled.p`
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: #919191;
`;
