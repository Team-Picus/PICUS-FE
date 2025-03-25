import styled from 'styled-components';

const ExpertApprove = () => {
  return (
    <Container>
      <p>작가 승인</p>
    </Container>
  );
};

export default ExpertApprove;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 16px;

  p {
    padding: 12px 4px;
    font: ${({ theme }) => theme.fonts.subtitle_16px_semibold};
    color: ${({ theme }) => theme.colors.gray9};
  }
`;
