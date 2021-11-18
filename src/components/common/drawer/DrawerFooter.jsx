import { ReactComponent as Logo } from "../../../assets/icons/logoMiniBg.svg";
import styled from "styled-components";
import BtnWrapper from "./BtnWrapper";

const DrawerFooter = () => {
  const buttons = {
    button1: ["설정", "#959595"],
    button2: ["로그아웃", "#959595"],
  };

  return (
    <StyledWrapper>
      <StyledSection>
        <p>작가-지원</p>
        <p>프로젝트 보러가기</p>
        <Logo alt="logo" fill="red" />
      </StyledSection>
      <BtnWrapper section={"drawerFooter"} buttons={buttons} />
    </StyledWrapper>
  );
};

export default DrawerFooter;

const StyledWrapper = styled.section`
  position: absolute;
  bottom: 3rem;

  @media ${({ theme }) => theme.device.mobile} {
    bottom: 2.6rem;
  }
`;

const StyledSection = styled.div`
  position: relative;
  width: 16.8rem;
  height: 6.5rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.balck};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > p {
    font: 1.5rem/2.1rem NanumMyeongjo;
    letter-spacing: 0.04em;
  }

  & > svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
