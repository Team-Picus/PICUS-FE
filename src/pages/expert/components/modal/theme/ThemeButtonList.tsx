import styled from 'styled-components';
import ThemeButtonItem from '@expert/components/modal/theme/ThemeButtonItem.tsx';

const ThemeButtonList = () => {
  return (
    <Container>
      <ThemeButtonItem text="가족" />
      <ThemeButtonItem text="가족" />
      <ThemeButtonItem text="가족" />
      <ThemeButtonItem text="가족" />
      <ThemeButtonItem text="가족" />

      <ThemeButtonItem text="가족" />

      <ThemeButtonItem text="가족" />
      <ThemeButtonItem text="가족" />
    </Container>
  );
};

export default ThemeButtonList;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 12px;
    
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  & > * {
    flex: 0 0 calc(33.33% - 10px);
  }
`;
