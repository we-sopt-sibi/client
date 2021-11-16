import styled from "styled-components";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification.svg";
import { drawerProfile } from "../../../assets/images";
import BtnWrapper from "./BtnWrapper";

const Profile = () => {
  return (
    <StyledWrapper>
      <NotificationIcon alt="notification" />
      <img src={drawerProfile} alt="profile" />
      <h3>령이</h3>
      <h4>brunch.co.kr/@brunch_id</h4>
      <BtnWrapper isProfile={true} />
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
`;
