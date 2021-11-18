import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Profile, DrawerBody, DrawerFooter } from "../..";

const Drawer = ({ showDrawer }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    if (showDrawer) {
      setAnimate(true);
    } else if (!showDrawer && animate) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 125);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showDrawer, animate]);

  if (!showDrawer && !animate) return null;

  return (
    <StyledWrapper showDrawer={showDrawer}>
      <Profile />
      <DrawerBody />
      <DrawerFooter />
    </StyledWrapper>
  );
};

export default Drawer;

const StyledWrapper = styled.section`
  position: absolute;
  width: 26.1rem;
  height: 108rem;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray300};
  z-index: 3;

  ${({ showDrawer }) =>
    showDrawer
      ? css`
          animation: slideIn 300ms forwards ease-in;
        `
      : css`
          animation: slideOut 500ms forwards ease-out;
        `}

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 26rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 20.5rem;
  }
`;
