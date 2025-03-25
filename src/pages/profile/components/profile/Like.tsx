import { MemberRole } from '@shared/store/useMemberRoleStore.ts';
import IconMyHeartFill from '@icon/icon-my-heart-fill.svg';
import IconMyHeart from '@icon/icon-my-heart.svg';
import { useState } from 'react';
import styled from 'styled-components';

interface LikeProps {
  memberRole: MemberRole;
}

const Like = ({ memberRole }: LikeProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <HeartBox onClick={() => (memberRole === MemberRole.NORMAL ? handleLike() : undefined)}>
      <img src={isLiked ? IconMyHeartFill : IconMyHeart} alt="" />
      <p>351</p>
    </HeartBox>
  );
};

export default Like;

const HeartBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  p {
    font: ${({ theme }) => theme.fonts.body_14px_medium};
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
