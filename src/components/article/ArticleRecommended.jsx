import styled from "styled-components";
import { thumbnail } from "../../assets/images";

const ArticleRecommended = ({ data }) => {
  return (
    <StyledWrapper>
      <img src={thumbnail} />
      <h1>{data.title}</h1>
      <h2>{data.paragraph}</h2>
      <span>{data.writer}</span>
    </StyledWrapper>
  );
};

export default ArticleRecommended;

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;

  & > h1 {
    margin-top: 2.6rem;
    font-family: NanumMyeongjo;
    font-size: ${({ theme }) => theme.fontSizes.subTitle2};
  }

  & > h2 {
    margin: 0.8rem 0;
    font-family: NotoSansKR;
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    width: 100%;
    height: 7.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.04em;
    line-height: 1.8;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-family: NotoSansKR;

    &::before {
      content: "by";
      font-family: Georgia;
      margin-right: 0.4rem;
    }
  }
`;
