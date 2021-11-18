import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { ReactComponent as LikeWhiteIcon } from "../../assets/icons/likeWhite.svg";

const ArticleBodyFooter = () => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);

  const handleLikeClick = () => {
    setIsLikeClicked(!isLikeClicked);
  };

  return (
    <StyledBodyFooterWrapper>
      <StyledTags>
        <li>
          <button>IT 트렌드</button>
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
          {isLikeClicked ? <LikeIcon /> : <LikeWhiteIcon />}
          <span>좋아요</span>
          <span>199</span>
        </button>
        <button>
          <CommentIcon />
          <span>댓글</span>
          <span>3</span>
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
  width: 100%;
  margin-bottom: 3.3rem;
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
`;

const StyledButtons = styled.div`
  display: flex;

  ${({ isLikeClicked }) => isLikeClicked} {
    & > button:first-child {
      color: ${({ theme }) => theme.colors.white};
      border: 0;
      background-color: ${({ theme }) => theme.colors.main};
      & > span + span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

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
        fill: ${({ theme }) => theme.colors.black};
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
`;
