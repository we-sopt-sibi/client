import styled from "styled-components";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/navMore.svg";

const NavIconWrapper = () => {
  return (
    <StyledWrapper>
      <LikeIcon alt="like" />
      <span>199</span>
      <CommentIcon alt="comment" />
      <span>1</span>
      <ShareIcon alt="share" />
      <span>384</span>
      <MoreIcon alt="more" style={{ marginLeft: "0.6rem" }} />
    </StyledWrapper>
  );
};

export default NavIconWrapper;

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;

  svg {
    width: 2.4rem;
    height: 2.4rem;

    & + span {
      margin-left: 0.4rem;
      margin-right: 1rem;
      font-size: ${({ theme }) => theme.fontSizes.paragraph2};
      letter-spacing: -0.056rem;
    }
  }
`;
