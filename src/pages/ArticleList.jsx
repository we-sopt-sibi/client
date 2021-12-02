import ListHeader from "../components/articleList/ListHeader";
import styled from "styled-components";
import ListItem from "../components/articleList/ListItem";
import WriterList from "../components/articleList/WriterList";
import ListFooter from "../components/articleList/ListFooter";
import { client } from "../libs/api";
import { useEffect, useState } from "react";

const ArticleList = ({ setShowDrawer }) => {
  const [articleListData, setArticleListData] = useState([]);

  const getArticleListData = async () => {
    try {
      const { data } = await client.get("api/article/list");
      console.log(`data`, data);
      console.log(`data.data`, data.data);
      setArticleListData(data.data);
      console.log(articleListData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleListData();
  }, []);

  return (
    <StyledWrapper onClick={() => setShowDrawer(false)}>
      <ListHeader />
      <ListMain>
        <section>
          <article>
            {articleListData.map((datum) => (
              <ListItem key={datum.id} datum={datum} />
            ))}
            <ListFooter />
          </article>
          <aside>
            <WriterList />
          </aside>
        </section>
      </ListMain>
    </StyledWrapper>
  );
};

export default ArticleList;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const ListMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3.4rem;

  & > section {
    margin-top: 3.6rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media ${({ theme }) => theme.device.tablet} {
      width: 96rem;
    }

    @media ${({ theme }) => theme.device.mobile} {
      width: 32rem;
    }
  }

  & > section article {
    margin-right: 2rem;
  }

  & > section aside {
    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 15.6rem;
    }
    width: 22rem;
    height: 35.7rem;
  }
`;
