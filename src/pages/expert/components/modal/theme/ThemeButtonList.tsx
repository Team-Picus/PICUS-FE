import styled from 'styled-components';
import ThemeButtonItem from '@expert/components/modal/theme/ThemeButtonItem.tsx';
import IconDot from '@icon/icon-dot-gray.svg';
import IconWarning from '@icon/icon-warning.svg';
import React from 'react';

interface ThemeButtonListProps {
  title: string;
  items: string[];
}

const ThemeButtonList: React.FC<ThemeButtonListProps> = ({ title, items }) => {
  return (
    <Container>
      <Title>
        <img src={IconDot} alt={'dot'}></img>
        {title}
      </Title>
      <Description>
        <img src={IconWarning} alt={'warning'}></img>
        중복 선택 가능
      </Description>
      <ListSection>
        {items?.map((item, index) => <ThemeButtonItem key={index} text={item} />)}
      </ListSection>
    </Container>
  );
};

export default ThemeButtonList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray8};
  margin-top: 25px;
  display: flex;
  gap: 10px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font: ${({ theme }) => theme.fonts.caption_10px_medium};
  color: ${({ theme }) => theme.colors.gray6};
  margin-top: 8px;
`;

const ListSection = styled.div`
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
