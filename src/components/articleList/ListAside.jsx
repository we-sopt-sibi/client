import React from "react";
import styled from "styled-components";
import CenterDotIcon from "../../assets/icons/centerDot.svg";

const ListAside = ({ writer }) => {
  console.log(writer);
  return (
    <StyledWrapper>
      <img src={writer.writerProfile} alt="writer" />
      <div className="writer">
        <div className="writer_user">
          <span>{writer.writerName}</span>
        </div>
        <div className="writer_Info">
          <div>글 {writer.writerPosts}</div>
          <img src={CenterDotIcon} />
          <div>구독자 {writer.writerSubs}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ListAside;

const StyledWrapper = styled.div`
  height: 3.6rem;
  width: 100%;
  margin-bottom: 1.4rem;
  padding-left: 2.2rem;
  display: flex;

  & > img {
    @media ${({ theme }) => theme.device.tablet} {
      width: 3rem;
      height: 3rem;
    }
    width: 3.6rem;
    height: 3.6rem;
  }

  .writer {
    margin-left: 1.2rem;
  }

  .writer_user {
    height: 1.8rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.paragraph1};
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1.2rem;
    }
  }
  .writer_Info {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.caption};
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1rem;
    }
    color: ${({ theme }) => theme.colors.gray500};
  }
  .writer_Info > img {
    margin: 0 0.7rem;
  }
`;
