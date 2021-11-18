import styled from "styled-components";
import { DrawerMenu } from "../..";
import { ReactComponent as Logo } from "../../../assets/icons/logoMini.svg";

const DrawerBody = () => {
  const menuList = ["브런치 홈", "실시간 브런치", "출간된 브런치", "최근 본 브런치", "구독한 브런치"];

  return (
    <section>
      <MyProfile>
        <DrawerMenu menu="내 프로필" isProfile={true} />
        <DrawerMenu menu="작성한 브런치" isProfile={true} />
      </MyProfile>
      <DrawerNav>
        <section>
          <div />
          <Logo alt="logoMini" />
          <div />
        </section>
        {menuList.map((menu, idx) => (
          <DrawerMenu key={`menu-${idx}`} menu={menu} isProfile={false} />
        ))}
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
  letter-spacing: -0.04em;
  margin-top: 4rem;
  margin-bottom: 3.6rem;

  @media ${({ theme }) => theme.device.mobile} {
    & > section {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 2.2rem;
  }
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph1};
  letter-spacing: -0.04em;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    margin-bottom: 3.9rem;

    & > svg {
      margin: 0 1rem;
    }

    & > div {
      width: 5.3rem;
      border: 0.05rem solid #f1f1f1;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > :nth-child(1) {
      margin-bottom: 2.3rem;
    }
  }
`;
