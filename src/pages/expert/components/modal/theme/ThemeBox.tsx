import styled from 'styled-components';
import IconWarning from '@icon/icon-warning.svg';
import ThemeButtonList from '@expert/components/modal/theme/ThemeButtonList.tsx';

const ThemeBox = () => {
  return (
    <Container>
      <Title>컨셉</Title>
      <Description>
        <img src={IconWarning} alt={'warning'}></img>
        중복 선택 가능
      </Description>
      <ThemeButtonList />
    </Container>
  );
};

export default ThemeBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
  margin-top: 25px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.gray6};
  margin-top: 8px;
`;
