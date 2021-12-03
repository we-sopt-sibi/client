import styled from "styled-components";
import { ReactComponent as MoreIcon } from "../../assets/icons/navMore.svg";

import { useEffect, useState } from "react";
import { IconWrapper } from "..";

const NavIconWrapper = () => {
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  useEffect(() => {
    console.log(`isMoreClicked`, isMoreClicked);
  }, [isMoreClicked]);

  return (
    <StyledWrapper>
      <IconWrapper isVisible={isMoreClicked} />
      <StyledMoreIcon isClicked={isMoreClicked} onClick={() => setIsMoreClicked(!isMoreClicked)}>
        <MoreIcon alt="more" />
      </StyledMoreIcon>
    </StyledWrapper>
  );
};

export default NavIconWrapper;

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  position: relative;
`;

const StyledMoreIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  background-color: white;
  transition: transform 0.5s;
  transform: ${(props) => (props.isClicked ? "rotate(90deg)" : "")};
`;
