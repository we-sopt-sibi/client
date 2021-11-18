import { WriterInfo, ArticleListRecommended, Banner } from "..";
import styled from "styled-components";

const ArticleFooter = () => {
  return (
    <StyledWrapper>
      <WriterInfo />
      <ArticleListRecommended />
      <Banner />
    </StyledWrapper>
  );
};

export default ArticleFooter;

const StyledWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 150.2rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
