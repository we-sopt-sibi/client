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

  const getArticleData = async () => {
    try {
      const { data } = await client.get("api/article/1");
      console.log(`data`, data);
      setArticleData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <StyledArticleWrapper onClick={() => setShowDrawer(false)}>
      <ArticleHeader articleData={articleData.data} />
      <ArticleCoverImage />
      <ArticleBody articleData={articleData.data} />
      <ArticleBodyFooter articleData={articleData.data} />
      <ArticleComment articleData={articleData.data} />
      <ArticleFooter articleData={articleData} />
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
