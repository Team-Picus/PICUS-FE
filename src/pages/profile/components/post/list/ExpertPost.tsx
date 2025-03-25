import styled from 'styled-components';

interface ExpertPostProps {
  id: number;
  title: string;
  todayAvailable: boolean;
  imageUrl: string;
}

const ExpertPost = ({ title, todayAvailable, imageUrl }: ExpertPostProps) => {
  return (
    <PostContainer $imageUrl={imageUrl}>
      <BannerCaption style={{ visibility: todayAvailable ? 'visible' : 'hidden' }}>당일가능</BannerCaption>
      <PostTitle>{title}</PostTitle>
    </PostContainer>
  );
};

export default ExpertPost;

const PostContainer = styled.div<{ $imageUrl: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0.6) 100%),
    url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  height: 25vh;
`;

const BannerCaption = styled.div`
  width: fit-content;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.main1};
  background-color: ${({ theme }) => theme.colors.tag3};
  border-radius: 2px;
  padding: 2px 4px;
`;

const PostTitle = styled.p`
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: ${({ theme }) => theme.colors.gray3};
`;
