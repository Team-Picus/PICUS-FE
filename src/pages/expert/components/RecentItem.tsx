import React from 'react';
import styled from 'styled-components';

interface RecentItemProps {
  image: string;
  title: string;
  logo: string;
}

const RecentItem: React.FC<RecentItemProps> = ({ image, title, logo }) => {
  return (
    <ItemCard>
      <ItemImageWrapper>
        <ItemImage src={image} alt={title} />
        <Overlay>
          <InfoSection>
            <Logo src={logo} alt="logo" />
            <ItemTitle>{title}</ItemTitle>
          </InfoSection>
        </Overlay>
      </ItemImageWrapper>
    </ItemCard>
  );
};

export default RecentItem;

const ItemCard = styled.div`
  flex-shrink: 0;
  width: 137px;
  height: 170px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ItemImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.8) 100%
  ); // 사진 그라데이션 조절
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 9px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const Logo = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const ItemTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin: 0;
  text-align: left;
  white-space: nowrap; /* 텍스트가 길어져도 한 줄로 유지 */
  overflow: hidden; /* 넘치는 텍스트가 보이지 않도록 설정 */
  text-overflow: ellipsis; /* 넘치는 텍스트는 '...'으로 처리 */
`;
