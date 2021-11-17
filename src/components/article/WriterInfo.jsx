import styled from "styled-components";
import { BtnWrapper } from "..";
import { writerProfile } from "../../assets/images";

const WriterInfo = () => {
  const buttons = {
    button1: ["제안하기", "#959595"],
    button2: ["구독하기", "#00C3BD"],
  };
  return (
    <StyledWrapper>
      <StyledTextBox>
        <h1>령이</h1>
        <h3>기획에 진심인 개발자</h3>
        <span>구독자 2,078</span>
      </StyledTextBox>
      <section style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <img src={writerProfile} alt="profile" />
        <BtnWrapper section={"writerInfo"} buttons={buttons} />
      </section>
    </StyledWrapper>
  );
};

export default WriterInfo;

const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  margin-top: 6rem;
  margin-bottom: 5.6rem;
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: ${({ theme }) => theme.fontSizes.display};
    letter-spacing: -0.04em;
    line-height: 4.05rem;
  }

  & > h3 {
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    letter-spacing: -0.04em;
    margin-top: 2.2rem;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    letter-spacing: -0.04em;
    margin-top: 4rem;
  }
`;
