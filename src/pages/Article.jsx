import {
  ArticleBody,
  ArticleBodyFooter,
  ArticleComment,
  ArticleFooter,
  ArticleHeader,
  ArticleCoverImage,
} from "../components";
import styled from "styled-components";
import { client } from "../libs/api";
import { useEffect, useState } from "react";

const Article = ({ setShowDrawer }) => {
  const [articleData, setArticleData] = useState([]);
  const [isCommentAdded, setIsCommentAdded] = useState(false);

  const getArticleData = async () => {
    try {
      const { data } = await client.get("api/article/1");
      console.log(`data`, data);
      setArticleData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, [isCommentAdded]);

  useEffect(() => {
    setIsCommentAdded(false);
  });

  return (
    <StyledArticleWrapper onClick={() => setShowDrawer(false)}>
      <ArticleHeader articleData={articleData} />
      <ArticleCoverImage />
      <ArticleBody articleData={articleData} />
      <ArticleBodyFooter articleData={articleData} />
      <ArticleComment articleData={articleData} setIsCommentAdded={setIsCommentAdded} />
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
  width: 100%;
  height: 100%;
  position: relative;
`;
