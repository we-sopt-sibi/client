import { ArticleBody, ArticleBodyFooter, ArticleComment, ArticleFooter, ArticleHeader } from "../components";
import styled from "styled-components";

const Article = () => {
  return (
    <StyledArticleWrapper>
      <ArticleHeader />
      <ArticleBody />
      <ArticleBodyFooter />
      <ArticleComment />
      <ArticleFooter />
    </StyledArticleWrapper>
  );
};

export default Article;

const StyledArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 120rem;
  height: 100%;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 6.8rem);
    height: 100%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 4rem);
    height: 100%;
  }
`;
