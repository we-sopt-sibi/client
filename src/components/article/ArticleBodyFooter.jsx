import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as LikeWhiteIcon } from "../../assets/icons/likeWhite.svg";
import { isLikeAtom } from "../../states";

const ArticleBodyFooter = ({ articleData }) => {
  const navigate = useNavigate();
  const { isLike, likeNumber, commentNumber } = articleData || {};

  const [likeCount, setLikeCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isLikeClicked, setIsLikeClicked] = useRecoilState(isLikeAtom);

  useEffect(() => {
    setIsLikeClicked(isLike);
    setLikeCount(likeNumber);
  }, [likeNumber]);

  useEffect(() => {
    if (isLikeClicked) {
      if (isFirstRender) {
        setLikeCount(likeCount);
        setIsFirstRender(false);
      } else {
        setLikeCount(likeCount + 1);
      }
    } else setLikeCount(likeCount - 1);
  }, [isLikeClicked]);

  const handleLikeClick = () => {
    setIsLikeClicked(!isLikeClicked);
  };

  const handleTag = () => {
    navigate("/list");
  };

  return (
    <StyledBodyFooterWrapper className="scrollHere">
      <StyledTags>
        <li>
          <button onClick={handleTag}>IT 트렌드</button>
        </li>
        <li>
          <button>디자인</button>
        </li>
        <li>
          <button>컬러</button>
        </li>
      </StyledTags>
      <StyledButtons isLikeClicked={isLikeClicked}>
        <button onClick={handleLikeClick}>
          {isLikeClicked ? <LikeWhiteIcon /> : <LikeIcon />}
          <span>좋아요</span>
          <span>{likeCount}</span>
        </button>
        <button>
          <CommentIcon />
          <span>댓글</span>
          <span>{commentNumber}</span>
        </button>
      </StyledButtons>
    </StyledBodyFooterWrapper>
  );
};

export default ArticleBodyFooter;

const StyledBodyFooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 36rem);
  margin: 0 auto;
  margin-bottom: 3rem;

  @media ${({ theme }) => theme.device.labtop} {
    width: calc(100% - 12rem);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 3.4rem);
  }

  @media only screen and (max-width: 490px) {
    width: calc(100% - 2.5rem);
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 2rem);
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledTags = styled.ul`
  display: flex;

  & > li {
    padding: 0.8rem 1rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray600};
    border-radius: 2rem;

    & > button {
      border: 0;
      outline: 0;
      font-size: ${({ theme }) => theme.fontSizes.caption};
      color: ${({ theme }) => theme.colors.gray600};
    }
  }

  & > li + li {
    margin-left: 0.8rem;
  }

  @media only screen and (max-width: 490px) {
    margin-bottom: 2.4rem;

    & > li {
      padding: 0.8rem 1rem;
      & > button {
        font-size: ${({ theme }) => theme.fontSizes.caption};
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 2.4rem;

    & > li {
      padding: 0.8rem 1rem;
      & > button {
        font-size: ${({ theme }) => theme.fontSizes.caption};
      }
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;

  ${(prop) => {
    if (prop.isLikeClicked) {
      return css`
        & > button:first-child {
          color: ${({ theme }) => theme.colors.white};
          border: 0;
          background-color: ${({ theme }) => theme.colors.main};

          & > svg {
            margin-right: 0.6em;
            & > path {
              fill: ${({ theme }) => theme.colors.white};
            }
          }

          & > span + span {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      `;
    }
  }}

  & > button {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    color: ${({ theme }) => theme.colors.gray600};
    outline: 0;
    padding: 0.75rem 1.9rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray600};
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.white};

    & > svg {
      margin-right: 0.6em;
      & > path {
        fill: ${({ theme }) => theme.colors.gray600};
      }
    }

    & > span {
      margin-left: 0.2rem;
      text-align: center;
      line-height: 1rem;
    }

    & > span + span {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  & > button + button {
    margin-left: 0.8rem;
  }

  @media only screen and (max-width: 490px) {
    & > button {
      font-size: ${({ theme }) => theme.fontSizes.paragraph1};
      padding: 0.75rem 1.9rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > button {
      font-size: ${({ theme }) => theme.fontSizes.paragraph1};
      padding: 0.75rem 1.9rem;
    }
  }
`;
