import styled from "styled-components";
import ArticleRecommended from "./ArticleRecommended";

const ArticleListRecommended = () => {
  const tempData = [
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
    {
      title: "모두를 위한 디자인",
      paragraph:
        "이상을 위한 정보표시 토스, 토스 증권의 그래프가 모범사례라고 생각한다. 아래는 원본 막대, 파이 그래프와 그것을 제1색각...적록색맹 사용자에게는 파란색이 보라색으로 어쩌구 저쩌구",
      writer: "글쓴이",
    },
  ];
  return (
    <StyledWrapper>
      {tempData.map((data, idx) => (
        <ArticleRecommended key={`Article-${idx}`} data={data} />
      ))}
    </StyledWrapper>
  );
};

export default ArticleListRecommended;

const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 132rem;
  height: 73.9rem;
  overflow: hidden;

  @media ${({ theme }) => theme.device.tablet} {
    width: 64rem;
    height: 114.1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 30rem;
  }
`;
