import styled from 'styled-components';
import { HeaderAction } from '@shared/types';

interface AppBarProps {
  title?: string;
  leftHeaderAction?: HeaderAction;
  rightHeaderActionArr?: HeaderAction[];
}

const AppBar = ({ title, leftHeaderAction, rightHeaderActionArr }: AppBarProps) => {
  const { icon, onClick } = leftHeaderAction ? leftHeaderAction : { icon: '', onClick: undefined };

  return (
    <Wrapper>
      <LeftHeaderSection>
        <img
          src={icon}
          onClick={onClick ? onClick : undefined}
          style={{ background: 'none' }}
        />
        <p>{title}</p>
      </LeftHeaderSection>
      <RightHeaderSection>
        {rightHeaderActionArr?.map((action, index) => (
          <img
            key={index}
            src={action.icon}
            onClick={action.onClick}
            style={{ background: 'none' }}
            alt="right-icon"
          />
        ))}
      </RightHeaderSection>
    </Wrapper>
  );
};
export default AppBar;
const Wrapper = styled.header<{ $center?: boolean }>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  max-width: 440px;
  align-items: center;
  padding: 8px 16px;
`;

const LeftHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    flex-shrink: 0;
  }

  p {
    color: white;
    font: ${({ theme }) => theme.fonts.headline_18px_semibold};
    margin: 0;
    text-align: center;
  }
`;

const RightHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
