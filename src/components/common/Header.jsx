import styled from "styled-components";
import { ReactComponent as NavHamburger } from "../../assets/icons/navHamburger.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { Drawer, NavIconWrapper } from "..";
import { useLocation } from "react-router";

const Header = ({ showDrawer, setShowDrawer }) => {
  const { pathname } = useLocation();

  return (
    <StyledWrapper pathname={pathname}>
      <Drawer showDrawer={showDrawer} />
      <StyledIconWrapper>
        <NavHamburger alt="hamburger" onClick={() => setShowDrawer(true)} />
        <Logo alt="logo" />
      </StyledIconWrapper>
      <span>IT 트렌드</span>
      {pathname === "/" ? <NavIconWrapper /> : <Search alt="search" />}
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.9rem 2rem;
  padding-right: 0;
  z-index: 99;

  & > span {
    visibility: ${(props) => (props.pathname === "/" ? "hidden" : "visible")};
    font-size: ${({ theme }) => theme.fontSizes.title};
    position: relative;
    bottom: -0.7rem;
  }
`;

const StyledIconWrapper = styled.section`
  display: flex;
  width: 12.7rem;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.mobile} {
    & > :nth-child(2) {
      display: none;
    }
  }
`;
