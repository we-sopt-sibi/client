import styled from "styled-components";
import { Profile, DrawerBody, DrawerFooter } from "../..";

const Drawer = () => {
  return (
    <StyledWrapper>
      <Profile />
      <DrawerBody />
      <DrawerFooter />
    </StyledWrapper>
  );
};

export default Drawer;

const StyledWrapper = styled.section`
  position: absolute;
  width: 26rem;
  height: 108rem;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray300};
`;
