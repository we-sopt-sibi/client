import styled from "styled-components";
import { articleFooterBanner } from "../../assets/images";

const Banner = () => {
  return (
    <StyledBanner>
      <img src={articleFooterBanner} />
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  background-color: #a99582;
  position: absolute;
  /* width: 192rem; */
  width: 100%;
  height: 30rem;
  bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 71.6rem;
    height: 100%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 15rem;

    & > img {
      width: 100%;
    }
  }
`;
