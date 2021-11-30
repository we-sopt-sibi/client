import styled from "styled-components";

const ArticleBody = ({ articleData }) => {
  const { content } = articleData || {};

  return (
    <>
      <StyledBodyWrapper dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default ArticleBody;

const StyledBodyWrapper = styled.article`
  width: calc(100% - 36rem);
  margin: 0 auto;
  height: 100%;
  margin-bottom: 10.6rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 6.4rem;
  }

  & > p {
    font-family: "Noto Sans KR";
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    line-height: 180%;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 6.4rem;
  }

  & > h3 {
    font-family: "Noto Sans KR";
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.display};
    line-height: 4.2rem;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.6rem;
  }

  @media ${({ theme }) => theme.device.labtop} {
    width: calc(100% - 12rem);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 3.4rem);
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 10.6rem;
    width: calc(100% - 2rem);

    & > svg:last-child {
      padding-bottom: 0;
    }
  }
`;
