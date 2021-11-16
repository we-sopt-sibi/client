import styled from "styled-components";

const Footer = () => {
  return <StyledWrapper />;
};

export default Footer;

const StyledWrapper = styled.section`
  height: 72rem;
  background-color: ${({ theme }) => theme.colors.gray300};
`;
