import styled from "styled-components";

const BtnWrapper = ({ isProfile }) => {
  return (
    <StyledBtnWrapper isProfile={isProfile}>
      <button>설정</button>
      <button>로그아웃</button>
    </StyledBtnWrapper>
  );
};

export default BtnWrapper;

const StyledBtnWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.isProfile ? "1.5rem" : "4.6rem")};

  & > button {
    border-color: ${(props) => (props.isProfile ? "#00C3BD" : "#959595")};
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${(props) => (props.isProfile ? "#00C3BD" : "#959595")};
    width: 8rem;
    height: 3.1rem;
    justify-content: center;

    & + button {
      margin-left: ${(props) => (props.isProfile ? "1.2rem" : "0.6rem")};
    }
  }
`;
