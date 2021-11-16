import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/icons/logoMini.svg";

const DrawerBody = () => {
  return (
    <section>
      <MyProfile>
        <section>
          <div />
          <span>내 프로필</span>
          <div />
        </section>
        <span>작성한 브런치</span>
      </MyProfile>
      <DrawerNav>
        <section>
          <div />
          <Logo alt="logoMini" />
          <div />
        </section>
        <span>브런치 홈</span>
        <span>실시간 브런치</span>
        <span>출간된 브런치</span>
        <span>최근 본 브런치</span>
        <span>구독한 브런치</span>
      </DrawerNav>
    </section>
  );
};

export default DrawerBody;

const MyProfile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph1};
  letter-spacing: -0.056rem;

  & > section {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 1.9rem;
    margin-top: 4.1rem;

    & > div {
      width: 3.5rem;
      border: 0.05rem solid ${({ theme }) => theme.colors.main};
    }

    & > span {
      margin: 0.8rem;
    }
  }
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph1};
  letter-spacing: -0.056rem;

  & > section {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 3.9rem;
    margin-top: 3.6rem;

    & > div {
      width: 5.4rem;
      border: 0.05rem solid #f1f1f1;
    }

    & > svg {
      margin: 1rem;
    }
  }

  & > span {
    & + span {
      margin-top: 1.8rem;
    }
  }
`;
