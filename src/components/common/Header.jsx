import styled from "styled-components";
import { ReactComponent as NavIcon } from "../../assets/icons/navHamburger.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { Drawer, NavIconWrapper } from "..";
import { useLocation } from "react-router";

const Header = ({ showDrawer, setShowDrawer }) => {
  const { pathname } = useLocation();

  return (
    <StyledWrapper pathname={pathname}>
      <Drawer showDrawer={showDrawer} />
      <section>
        <NavIcon alt="hamburger" onClick={() => setShowDrawer(true)} />
        <LogoIcon alt="logo" />
      </section>
      <span>IT 트렌드</span>
      {pathname === "/" ? <NavIconWrapper /> : <SearchIcon alt="search" />}
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.9rem 2rem;

  & > section > svg {
    height: 4.2rem;
  }

  & > span {
    visibility: ${(props) => (props.pathname === "/" ? "hidden" : "visible")};
    font-size: ${({ theme }) => theme.fontSizes.title};
    position: relative;
    bottom: -0.7rem;
  }
`;
