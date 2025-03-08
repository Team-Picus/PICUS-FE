import styled from 'styled-components';
import ThemeButtonList from '@expert/components/modal/theme/ThemeButtonList.tsx';

const ThemeBox = () => {
  return (
    <Container>
      <ThemeButtonList
        title="컨셉"
        items={['개인프로필', '우정 · 연인', '가족', '웨딩', '입학 · 졸업']}
      />
      <ThemeButtonList
        title="분위기"
        items={['몽환적', '명량한', '아기자기', '모던', '클래식']}
      />
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
