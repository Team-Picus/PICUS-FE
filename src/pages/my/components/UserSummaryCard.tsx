import styled from 'styled-components';

const UserSummaryCard = () => {
  return (
    <Container>
      <SummaryItem>
        <SummaryTitle>예약 내역</SummaryTitle>
        <SummaryCount>0</SummaryCount>
      </SummaryItem>
      {/*디바이더*/}
      <Divider />
      <SummaryItem>
        <SummaryTitle>예약 내역</SummaryTitle>
        <SummaryCount>0</SummaryCount>
      </SummaryItem>
      {/*디바이더*/}
      <Divider />
      <SummaryItem>
        <SummaryTitle>예약 내역</SummaryTitle>
        <SummaryCount>0</SummaryCount>
      </SummaryItem>
    </Container>
  );
};

export default UserSummaryCard;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 7px 0 #d8dcf180;
  margin-bottom: 16px;
  margin-top: 24px;
`;

const Divider = styled.div`
  height: 32px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray2};
`;

const SummaryItem = styled.div`
  flex: 1;
  display: flex;
  gap: 4px;
  padding: 12px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SummaryTitle = styled.p`
  font: ${({ theme }) => theme.fonts.caption_12px_medium};
  color: ${({ theme }) => theme.colors.gray6};
`;

const SummaryCount = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
`;
