import styled, { css } from "styled-components";

const BtnWrapper = ({ section, buttons }) => {
  return (
    <StyledBtnWrapper section={section} button1={buttons.button1[1]} button2={buttons.button2[1]}>
      <button>{buttons.button1[0]}</button>
      <button>{buttons.button2[0]}</button>
    </StyledBtnWrapper>
  );
};

export default BtnWrapper;

const StyledBtnWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: ${(props) =>
    props.section === "profile" ? "1.5rem" : props.section === "drawerFooter" ? "4.6rem" : "2.6rem"};

  & > button {
    border-color: ${(props) => props.button1};
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${(props) => props.button1};
    width: 8rem;
    height: 3.1rem;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};

    & + button {
      margin-left: ${(props) =>
        props.section === "profile" ? "1.2rem" : props.section === "drawerFooter" ? "0.6rem" : "0.8rem"};
      border-color: ${(props) => props.button2};
      color: ${(props) => props.button2};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: ${(props) =>
      props.section === "profile" ? "1.5rem" : props.section === "drawerFooter" ? "1.6rem" : "2.6rem"};

    & > button {
      width: 6.3rem;
      height: 2.3rem;
      ${(props) =>
        props.section === "writerInfo"
          ? css`
              font-size: ${({ theme }) => theme.fontSizes.paragraph1};
              width: 8rem;
              height: 3.1rem;
            `
          : css`
              font-size: ${({ theme }) => theme.fontSizes.page};
              width: 6.3rem;
              height: 2.3rem;
            `};
    }
  }
`;
