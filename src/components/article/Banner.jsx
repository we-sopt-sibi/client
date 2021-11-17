import styled from "styled-components";
import { articleFooterBanner } from "../../assets/images";

const Banner = () => {
  return <StyledBanner src={articleFooterBanner} />;
};

export default Banner;

const StyledBanner = styled.img`
  position: absolute;
  width: 192rem;
  height: 30rem;
  bottom: 6rem;
`;
