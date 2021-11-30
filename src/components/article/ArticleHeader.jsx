import styled from "styled-components";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";

const ArticleHeader = ({ articleData }) => {
  const { title, subTitle, writer, thumbnail, createdAt } = articleData || {};

  return (
    <>
      <StyledHeaderWrapper>
        <h1> {title}</h1>
        <h2>{subTitle}</h2>
        <StyledProfile>
          <img src={thumbnail} alt="thumbnail" />
          <div>
            <span>by</span> <span>{writer}</span>
            <Dot />
            <span>{createdAt}</span>
          </div>
        </StyledProfile>
      </StyledHeaderWrapper>
    </>
  );
};

export default ArticleHeader;

const StyledHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 36rem);
  margin: 0 auto;
  position: relative;
  margin-top: 27.1rem;
  margin-bottom: 3.2rem;

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

  @media ${({ theme }) => theme.device.labtop} {
    width: calc(100% - 12rem);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 3.4rem);
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 2rem);
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

  & > img {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 0.6rem;
    border-radius: 50%;
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
