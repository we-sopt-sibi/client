import styled from "styled-components";
import { ReactComponent as ArticleImage } from "../../assets/images/articleImage.svg";

const ArticleBody = () => {
  return (
    <>
      <StyledBodyWrapper>
        <p>
          색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다.
          <br />
          브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한 색상이 비즈니스의 고객에게 잠재적인 영향을 줄 수 있다.
          내 경력을 통해 좋은 컬러 스킴은 사용자에게 잘 받아들여지고 호소력 있는 사이트를 만드는데 관련이 깊다는 것을
          배웠다. 브랜드 인지와 색상도 분명히 연관이 있으며 당신이 선택한 색상이 비즈니스의 고객에게 잠재적인 영향을 줄
          수 있다. 내 경력을 통해 좋은 컬러 스킴은 사용자에게 잘 받아들여지고 호소력 있는 사이트를 만드는데 관련이
          깊다는 것을 배웠다.
        </p>
        <ArticleImage />

        <h3>Palette outline : 60-30-10 ratio</h3>
        <p>
          색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기
          위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우
          신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다.
          색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기
          위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며
        </p>
        <ArticleImage />
      </StyledBodyWrapper>
    </>
  );
};

export default ArticleBody;

const StyledBodyWrapper = styled.article`
  width: calc(100% - 36rem);
  margin: 0 auto;
  height: 100%;
  margin-bottom: 10.6rem;

  & > svg {
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
