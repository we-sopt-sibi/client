import styled from "styled-components";
import { writerProfile } from "../../assets/images";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";

const CommentWrite = () => {
  return (
    <StyledInputWrapper>
      <img src={writerProfile} alt="" />
      <StyledInput>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="공감과 응원의 댓글은 작가에게 큰 힘이 됩니다. "></textarea>
        <div>
          <EmojiIcon />
          <button>확인</button>
        </div>
      </StyledInput>
    </StyledInputWrapper>
  );
};

export default CommentWrite;

const StyledInputWrapper = styled.div`
  display: flex;
  width: 120rem;
  margin: 0 auto;
  margin-top: 2.4rem;
  margin-bottom: 5rem;

  & > img {
    width: 4.2rem;
    height: 4.2rem;
    margin-left: 1.8rem;
    margin-right: 1.4rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > img {
      display: none;
    }
  }
`;

const StyledInput = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  width: 100%;

  & > textarea {
    padding: 1.4rem 2rem;
    width: 100%;
    resize: none;
    border: 0;
  }

  & > textarea::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
    font-weight: 300;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.colors.gray600};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 1rem 2rem;

    & > button {
      color: ${({ theme }) => theme.colors.gray600};
      padding: 0.6rem 2.7rem;
      border-radius: 1.6rem;
    }

    & > button:hover {
      color: ${({ theme }) => theme.colors.main};
      border-color: ${({ theme }) => theme.colors.main};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    & > textarea {
      height: 12rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > textarea {
      height: 12rem;
      padding: 1.4rem 0.8rem;
    }

    & > textarea::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.paragraph1};
      line-height: 2.52rem;
    }
  }
`;
