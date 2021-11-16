import styled from "styled-components";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification.svg";
import { drawerProfile } from "../../../assets/images";

const Profile = () => {
  return (
    <StyledWrapper>
      <NotificationIcon alt="notification" />
      <img src={drawerProfile} alt="profile" />
      <h3>령이</h3>
      <h4>brunch.co.kr/@brunch_id</h4>
      <section>
        <button>글쓰기</button>
        <button>작가신청</button>
      </section>
    </StyledWrapper>
  );
};

export default Profile;

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 23.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray200};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  & > svg {
    position: absolute;
    right: 1.8rem;
    top: 1.7rem;
  }

  & > img {
    width: 6rem;
    height: 6rem;
  }

  & > h3 {
    font-family: NotoSansKR-Regular;
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
  }

  & > h4 {
    font-family: Georgia;
    font-size: ${({ theme }) => theme.fontSizes.caption};
  }

  & > section {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    & > button {
      border-color: ${({ theme }) => theme.colors.main};
      border-radius: 1.6rem;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.main};
      width: 8rem;
      height: 3.1rem;
      justify-content: center;

      & + button {
        margin-left: 1.2rem;
      }
    }
  }
`;
