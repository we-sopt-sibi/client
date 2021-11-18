import React from "react";
import styled from "styled-components";
import CenterDotIcon from "../../assets/icons/centerDot.svg";

const ListItem = ({ datum }) => {
  return (
    <StyledWrapper>
      <div className="subTitle">{datum.title}</div>
      <div className="paragraph2">{datum.subTitle}</div>
      <div className="caption">
        <span>좋아요{datum.like}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>댓글{datum.comment}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>공유{datum.share}</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>{datum.time}시간전</span>
        <img src={CenterDotIcon} alt="dot" />
        <span>by{datum.writer}</span>
      </div>
    </StyledWrapper>
  );
};

export default ListItem;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 17rem;
  margin-bottom: 1.5rem;
  padding-top: 2.7rem;
  padding-left: 3rem;

  .subTitle {
    font-size: ${({ theme }) => theme.fontSizes.subTitle1};
    margin-bottom: 0.5rem;
  }

  .paragraph2 {
    font-size: ${({ theme }) => theme.fontSizes.paragraph2};
  }

  .caption {
    display: flex;
  }
`;
