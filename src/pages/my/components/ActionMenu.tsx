import styled from 'styled-components';

interface ActionMenuProps {
  label: '고객지원' | '로그인';
  menuItems: string[];
}

const ActionMenu = ({ label, menuItems }: ActionMenuProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <div>
        {menuItems.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </div>
    </Container>
  );
};

export default ActionMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
`;

const Label = styled.p`
  margin-left: 4px;
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: ${({ theme }) => theme.colors.gray6};
`;

const MenuItem = styled.p`
  padding: 12px 4px;
  font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
  color: ${({ theme }) => theme.colors.gray9};
`;
