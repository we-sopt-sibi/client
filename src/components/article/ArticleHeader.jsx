import styled from "styled-components";
import { ReactComponent as ArticleWriter } from "../../assets/images/articleWriter.svg";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";

const ArticleHeader = () => {
  return (
    <StyledHeaderWrapper>
      <h1>웹 디자인을 위한 컬러 선택</h1>
      <h2>실용적인 UI 컬러 적용 가이드</h2>
      <StyledProfile>
        <ArticleWriter />
        <div>
          <span>by</span> <span>이지현</span>
          <Dot />
          <span>Aug 19,2020</span>
        </div>
      </StyledProfile>
    </StyledHeaderWrapper>
  );
};

export default ArticleHeader;

const StyledHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 27.1rem;
  width: 100%;

  & > h1 {
    font-size: ${({ theme }) => theme.fontSizes.headLint};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Nanum Myeongjo";
    font-weight: 400;
    line-height: 5.2rem;
    margin-bottom: 0.6rem;
  }

  & > h2 {
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    color: ${({ theme }) => theme.colors.gray600};
    font-family: "Noto Sans KR";
    font-weight: 300;
    line-height: 180%;
    letter-spacing: -0.04em;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 4.7rem;
    & > h1 {
      font-size: ${({ theme }) => theme.fontSizes.subTitle1};
      line-height: 3.2rem;
      margin-bottom: 0.2rem;
    }

    & > h2 {
      font-size: ${({ theme }) => theme.fontSizes.paragraph1};
      line-height: 2.52;
    }
  }
`;

const StyledProfile = styled.div`
  display: flex;
  margin-top: 4.2rem;
  position: relative;

  & > svg {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 0.6rem;
  }

  div {
    position: relative;
    top: 0.7rem;

    & > svg {
      position: relative;
      width: 0.4rem;
      height: 0.4rem;
      left: 0;
      top: -0.2rem;
      margin: 0 0.675rem;
    }

    & > span:first-child {
      font-family: "Georgia";
      font-size: 1.2rem;
      font-style: italic;
      line-height: 1.4rem;
      color: ${({ theme }) => theme.colors.gray400};
      margin-right: 0.4rem;
    }

    & > span:nth-child(2) {
      font-family: "Noto Sans KR";
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.2rem;
      letter-spacing: -0.04em;
      color: ${({ theme }) => theme.colors.gray700};
    }

    & > span:last-child {
      font-family: "Noto Sans KR";
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.7rem;
      letter-spacing: -0.04em;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 1.2rem;
  }
`;
