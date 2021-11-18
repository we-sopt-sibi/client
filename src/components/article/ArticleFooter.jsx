import { WriterInfo, ArticleListRecommended, Banner } from "..";
import styled from "styled-components";

const ArticleFooter = () => {
  return (
    <StyledWrapper>
      <WriterInfo />
      <ArticleListRecommended />
      <Banner />
    </StyledWrapper>
  );
};

export default ArticleFooter;

const StyledWrapper = styled.footer`
  position: relative;
  width: 100vw;
  height: 150.2rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    height: 190.4rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 168rem;
  }
`;
