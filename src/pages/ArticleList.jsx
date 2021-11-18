import ListHeader from "../components/articleList/ListHeader";
import styled from "styled-components";
import ListItem from "../components/articleList/ListItem";
import UserList from "../components/articleList/UserList";

const ArticleList = () => {
  return (
    <StyledWrapper>
      <ListHeader />
      <div>
        <section>
          <ListItem />
        </section>
        <aside>
          <UserList />
        </aside>
      </div>
    </StyledWrapper>
  );
};

export default ArticleList;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
`;
