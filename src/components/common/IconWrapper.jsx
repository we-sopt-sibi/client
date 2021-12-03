import styled, { css } from "styled-components";
import { articleAtom, isLikeAtom } from "../../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { scroller } from "react-scroll";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as LikeBlackIcon } from "../../assets/icons/likeBlack.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";

const IconWrapper = ({ isVisible }) => {
  const articleData = useRecoilValue(articleAtom);

  const { likeNumber, comments, shareNumber } = articleData || {};
  const [isLike, setIsLike] = useRecoilState(isLikeAtom);

  const handleScroll = () => {
    setIsLike(!isLike);
    scroller.scrollTo("scrollHere", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <StyledContainer isVisible={isVisible}>
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
    </StyledContainer>
  );
};

export default IconWrapper;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    right: 4rem;
    ${({ isVisible }) =>
      isVisible
        ? css`
            animation: slideIn 0.5s ease-in forwards;
            @keyframes slideIn {
              0% {
                transform: translateX(150%);
              }
              100% {
                transform: translateX(0);
              }
            }
          `
        : css`
            animation: slideOut 0.5s ease-in forwards;
            @keyframes slideOut {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(150%);
              }
            }
          `}
  }
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
