import styled from "styled-components";

const ArticleCoverImage = () => {
  return <StyledCoverImage></StyledCoverImage>;
};

export default ArticleCoverImage;

export const StyledCoverImage = styled.div`
  position: sticky;
  top: 8rem;
  width: 100%;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 3.2rem;
`;
