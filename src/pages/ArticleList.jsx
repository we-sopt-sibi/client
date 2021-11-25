import ListHeader from "../components/articleList/ListHeader";
import styled from "styled-components";
import ListItem from "../components/articleList/ListItem";
import WriterList from "../components/articleList/WriterList";
import ListFooter from "../components/articleList/ListFooter";

const ArticleList = ({ setShowDrawer }) => {
  const tempData = [
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
    {
      title: "웹 디자인을 위한 컬러 선택",
      subTitle:
        "색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한",
      etx: "좋아요",
      like: 199,
      comment: 1,
      share: 384,
      time: 2,
      writer: "이지현",
    },
  ];
  return (
    <StyledWrapper onClick={() => setShowDrawer(false)}>
      <ListHeader />
      <div className="body">
        <section>
          <article>
            {tempData.map((datum, idx) => (
              <ListItem key={`data-${idx}`} datum={datum} />
            ))}
            <ListFooter />
          </article>
          <aside>
            <WriterList />
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
    margin-top: 3.6rem;
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
