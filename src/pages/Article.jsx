import {
  ArticleBody,
  ArticleBodyFooter,
  ArticleComment,
  ArticleFooter,
  ArticleHeader,
  ArticleCoverImage,
} from "../components";
import styled from "styled-components";

const Article = () => {
  return (
    <>
      <StyledArticleWrapper>
        <ArticleHeader />
        <ArticleCoverImage />
        <ArticleBody />
        <ArticleBodyFooter />
        <ArticleComment />
        <ArticleFooter />
      </StyledArticleWrapper>
    </>
  );
};

export default Article;

const StyledArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
`;
