import styled from "styled-components";
import { writerProfile } from "../../assets/images";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";
import { CommentWrite } from "../../components";

const ArticleComment = ({ articleData }) => {
  const { commentNumber, comments } = articleData || {};

  return (
    <>
      <StyledCommentWrapper>
        <StyledCommentHeader>
          <span>댓글</span>
          <span>{commentNumber}</span>
        </StyledCommentHeader>
        <StyledCommentList>
          {comments.map((comment) => (
            <li key={comment.commentId}>
              <StyledComment>
                <div>
                  <img src={writerProfile} alt="" />
                </div>
                <div>
                  <div>
                    <span>{comment.user[0].name}</span>
                    <Dot />
                    <span>{comment.createdAt.substring(0, 10)}</span>
                  </div>
                  <div>{comment.content}</div>
                </div>
              </StyledComment>
            </li>
          ))}
        </StyledCommentList>
      </StyledCommentWrapper>
      <CommentWrite />
    </>
  );
};

export default ArticleComment;

const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 36rem);
  margin: 0 auto;

  @media ${({ theme }) => theme.device.labtop} {
    width: calc(100% - 12rem);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% - 3.4rem);
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 2rem);
  }
`;

const StyledCommentHeader = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.paragraph2};
  padding-top: 2.6rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  & > span + span {
    margin-left: 0.4rem;
    color: ${({ theme }) => theme.colors.main};
  }
`;

const StyledCommentList = styled.ul`
  & > li {
    width: 100%;
  }
`;

const StyledComment = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  & > div:first-child {
    & > img {
      width: 4.2rem;
      height: 4.2rem;
      margin-left: 1.8rem;
      margin-right: 1.6rem;
    }
  }

  & > div:last-child {
    width: 100%;

    & > div:first-child {
      font-size: ${({ theme }) => theme.fontSizes.caption};
      font-weight: 400;
      line-height: 1.7rem;
      letter-spacing: -0.04em;
      margin-bottom: 0.4rem;
      color: ${({ theme }) => theme.colors.gray600};

      & > svg {
        height: 0.3rem;
        width: 0.3rem;
        margin: 0 0.4rem;
        position: relative;
        left: 0;
        top: -0.3rem;

        & > path {
          fill: ${({ theme }) => theme.colors.gray600};
        }
      }
    }

    & > div:last-child {
      font-size: ${({ theme }) => theme.fontSizes.paragraph1};
      font-weight: 400;
      letter-spacing: -0.04em;
    }
  }
`;
