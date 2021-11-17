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
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
