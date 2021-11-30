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
      <ListMain>
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
