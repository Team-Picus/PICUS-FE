import React from 'react';
import styled from 'styled-components';
import { Post } from '@shared/types';
import IconDot from '@icon/icon-dot.svg';
import IconHeart from '@icon/icon-heart.svg';

interface ExpertPostItemProps {
  post: Post;
}

const ExpertPostItem: React.FC<ExpertPostItemProps> = ({ post }) => {
  return (
    <CardContainer>
      <ImageSection>
        <ItemImage src={post.image} alt={post.title} />
        {/*<TagsContainer>*/}
        {/*  {post.tags.map((tag, index) => (*/}
        {/*    <Tag key={index}>{tag}</Tag>*/}
        {/*  ))}*/}
        {/*</TagsContainer>*/}
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
          <img src={IconDot} alt={'dot'}></img>
          <View>{post.views}명 보는 중</View>
        </LikeAndViewSection>
      </FooterSection>
    </CardContainer>
  );
};

export default ExpertPostItem;

const CardContainer = styled.div`
  flex-shrink: 0;
  width: 174px;
  height: 306px;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 218px;
`;

const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
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

// const TagsContainer = styled.div`
//   display: flex;
//   gap: 5px;
//   margin-top: 10px;
// `;
//
// const Tag = styled.span`
//   background-color: #e0e0e0;
//   padding: 3px 8px;
//   border-radius: 12px;
//   font-size: 10px;
//   color: #555;
//   cursor: pointer;
//   transition: background-color 0.3s;
//
//   &:hover {
//     background-color: #ccc;
//   }
// `;
