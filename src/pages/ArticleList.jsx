import ListHeader from "../components/articleList/ListHeader";
import styled from "styled-components";
import ListItem from "../components/articleList/ListItem";
import UserList from "../components/articleList/UserList";

const ArticleList = () => {
  return (
    <StyledWrapper>
      <ListHeader />
      <div className="body">
        <section>
          <article>
            <ListItem />
          </article>
          <aside>
            <UserList />
          </aside>
        </section>
      </div>
    </StyledWrapper>
  );
};

export default ArticleList;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};

  .body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body section {
    display: flex;
    justify-content: space-between;
    width: 120rem;
    height: 100%;
  }

  .body section article {
    width: 96rem;
    height: 100%;
  }

  .body section aside {
    width: 22rem;
    height: 35.7rem;
  }
`;
