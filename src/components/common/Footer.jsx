import styled from "styled-components";

const Footer = () => {
  return <StyledWrapper />;
};

export default Footer;

const StyledWrapper = styled.section`
  position: absolute;
  height: 72rem;
  width: calc(100% + 0.5rem);
  background-color: ${({ theme }) => theme.colors.gray300};

  @media ${({ theme }) => theme.device.tablet} {
    height: 17.4rem;
    width: 100vw;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 67.4rem;
  }
`;
