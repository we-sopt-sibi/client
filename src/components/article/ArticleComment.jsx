import styled from "styled-components";
import { writerProfile } from "../../assets/images";
import { ReactComponent as Dot } from "../../assets/icons/dot.svg";

const ArticleComment = () => {
  return (
    <StyledCommentWrapper>
      <StyledCommentHeader>
        <span>댓글</span>
        <span>1</span>
      </StyledCommentHeader>
      <StyledCommentList>
        <li>
          <StyledComment>
            <img src={writerProfile} alt="" />
            <span>은별</span>
            <Dot />
            <span>May 01. 2021</span>
            <div>좋은 정보 감사합니다.</div>
          </StyledComment>
        </li>
      </StyledCommentList>
    </StyledCommentWrapper>
  );
};

export default ArticleComment;

const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCommentHeader = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.paragraph2};
  padding-bottom: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};

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
  padding: 2.4rem 0;

  & > img {
    width: 4.2rem;
    height: 4.2rem;
    margin-left: 1.8rem;
    margin-right: 1.6rem;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: 400;
    line-height: 1.7rem;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.gray600};
  }

  & > svg {
    height: 0.3rem;
    width: 0.3rem;
    margin: 0 0.4rem;
    position: relative;
    left: 0;
    top: 0.8rem;

    & > path {
      fill: ${({ theme }) => theme.colors.gray600};
    }
  }

  & > div {
    position: relative;
    left: -9.5rem;
    top: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    font-weight: 400;
    letter-spacing: -0.04em;
  }
`;
