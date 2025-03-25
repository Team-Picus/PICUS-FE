import styled from 'styled-components';

interface CategoryProps {
  category: string;
  count: number;
}

const Category = ({ category, count }: CategoryProps) => {
  return (
    <CategoryContainer>
      {`${category} ${count}`}
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  flex: 0 0 auto;
  font: ${({ theme }) => theme.fonts.body_14px_medium};
  color: ${({ theme }) => theme.colors.gray7};
  padding: 4px 12px 8px 12px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
`;
