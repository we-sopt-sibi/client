import styled from "styled-components";
import { ArticleBodyImg1, ArticleBodyImg2 } from "../../assets/images";

const ArticleBody = () => {
  return (
    <StyledBodyWrapper>
      <p>
        색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다.<br></br> 브랜드 인지와 색상도
        분명히 연관이 있으며 당신이 선택한 색상이 비즈니스의 고객에게 잠재적인 영향을 줄 수 있다. 내 경력을 통해 좋은
        컬러 스킴은 사용자에게 잘 받아들여지고 호소력 있는 사이트를 만드는데 관련이 깊다는 것을 배웠다. 브랜드 인지와
        색상도 분명히 연관이 있으며 당신이 선택한 색상이 비즈니스의 고객에게 잠재적인 영향을 줄 수 있다. 내 경력을 통해
        좋은 컬러 스킴은 사용자에게 잘 받아들여지고 호소력 있는 사이트를 만드는데 관련이 깊다는 것을 배웠다.
      </p>
      <img src={ArticleBodyImg1} alt="" />
      <h3>Palette outline : 60-30-10 ratio</h3>

      <p>
        색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기
        위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우
        신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은
        좋은 웹디자인을 만들기 위해 필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해
        필수적인 것이며, 매우 신중히 고려되어야 한다. 색상은 좋은 웹디자인을 만들기 위해 필수적인 것이며
      </p>

      <img src={ArticleBodyImg2} alt="" />
    </StyledBodyWrapper>
  );
};

export default ArticleBody;

const StyledBodyWrapper = styled.article`
  position: relative;
  left: 0;
  top: 27.1rem;
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  margin-top: 3.2rem;
  padding-top: 3.2rem;

  & > img {
    width: 100%;
    height: 67.2rem;
    object-fit: cover;
    margin: 6.4rem 0;
  }

  & > p {
    font-family: "Noto Sans KR";
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    line-height: 180%;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.black};
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
`;
