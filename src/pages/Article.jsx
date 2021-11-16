import { ArticleBody, ArticleBodyFooter, ArticleComment, ArticleFooter, ArticleHeader } from "../components";
import styled from "styled-components";

const Article = ({ setShowDrawer }) => {
  return (
    <Wrapper onClick={() => setShowDrawer(false)}>
      <ArticleHeader />
      <ArticleBody />
      <ArticleBodyFooter />
      <ArticleComment />
      <ArticleFooter />
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.main`
  /* width: 100%;
  height: 100%; */
`;
