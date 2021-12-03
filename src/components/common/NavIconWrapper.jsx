import styled from "styled-components";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as LikeBlackIcon } from "../../assets/icons/likeBlack.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/navMore.svg";
import { articleAtom, isLikeAtom } from "../../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { scroller } from "react-scroll";

const NavIconWrapper = () => {
  const articleData = useRecoilValue(articleAtom);
  const [isLike, setIsLike] = useRecoilState(isLikeAtom);
  const { likeNumber, comments, shareNumber } = articleData || {};

  const handleScroll = () => {
    setIsLike(!isLike);
    scroller.scrollTo("scrollHere", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <StyledWrapper>
      <StyledIconWrapper onClick={handleScroll}>
        {isLike ? <LikeBlackIcon /> : <LikeIcon />}
        <span>{isLike ? likeNumber + 1 : likeNumber}</span>
      </StyledIconWrapper>
      <StyledIconWrapper>
        <CommentIcon alt="comment" />
        <span>{comments?.length}</span>
      </StyledIconWrapper>
      <StyledIconWrapper>
        <ShareIcon alt="share" />
        <span>{shareNumber}</span>
      </StyledIconWrapper>
      <MoreIcon alt="more" style={{ marginLeft: "0.6rem" }} />
    </StyledWrapper>
  );
};

export default NavIconWrapper;

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    margin-left: 0.4rem;
    margin-right: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    letter-spacing: -0.04em;
  }
`;
