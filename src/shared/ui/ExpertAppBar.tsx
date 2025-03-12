import styled from 'styled-components';
import Search from '@icon/icon-search.svg';
import CustomMenu from '@shared/ui/CustomMenu.tsx';

type HeaderAction = {
  icon: string;
  onClick?: () => void;
};

interface AppBarProps {
  rightHeaderAction?: HeaderAction;
}

const ExpertAppBar = ({ rightHeaderAction }: AppBarProps) => {
  const { icon, onClick } = rightHeaderAction
    ? rightHeaderAction
    : { icon: Search, onClick: undefined };

  return (
    <Wrapper>
      <CustomMenu
        dropdownItems={['스냅작가', '편집작가']}
        onItemClick={(item) => {
          console.log(item);
        }}
      />
      <img
        src={icon}
        onClick={onClick ? onClick : undefined}
        style={{ background: 'none' }}
        alt={'search'}
      />
    </Wrapper>
  );
};

export default ExpertAppBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  top: 0;
  width: 100%;
  max-width: 440px;
  min-height: 7.5vh;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0);
  z-index: 100;
  img {
    flex-shrink: 0;
  }
`;
