import styled from 'styled-components';
import ThemeButtonList from '@expert/components/modal/theme/ThemeButtonList.tsx';

const ThemeBox = () => {
  return (
    <Container>
      <ThemeButtonList />
      <ThemeButtonList />
      <ThemeButtonList />
    </Container>
  );
};

export default ThemeBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
