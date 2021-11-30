import React from "react";
import styled from "styled-components";
import CenterDotIcon from "../../assets/icons/centerDot.svg";
import listThumnail from "../../assets/images/listThumnail.png";

const ListItem = ({ datum }) => {
  return (
    <StyledWrapper>
      <div>
        <Title>{datum.title}</Title>
        <SubTitle>{datum.subTitle}</SubTitle>
        <Caption>
          <span>좋아요{datum.like}</span>
          <img src={CenterDotIcon} alt="dot" />
          <span>댓글{datum.comment}</span>
          <img src={CenterDotIcon} alt="dot" />
          <span>공유{datum.share}</span>
          <img src={CenterDotIcon} alt="dot" />
          <span>{datum.time}시간 전</span>
          <img src={CenterDotIcon} alt="dot" />
          <span>by {datum.writer}</span>
        </Caption>
      </div>
      <div>
        <img src={listThumnail} alt="listThumnail" />
      </div>
    </StyledWrapper>
  );
};

export default ListItem;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 17rem;
  margin-bottom: 1.5rem;
  padding-top: 2.7rem;
  padding-left: 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray300};
  @media ${({ theme }) => theme.device.tablet} {
    width: 53.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 32rem;
  }

  & > div:first-child {
    width: 100%;
    height: 100%;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 2.3rem;
    padding-bottom: 1.7rem;
    padding-right: 3rem;
    @media ${({ theme }) => theme.device.tablet} {
      padding-right: 0.9rem;
      margin-left: 1.9rem;
      padding-bottom: 2.2rem;
    }
  }

  & > div:last-child img {
    @media ${({ theme }) => theme.device.tablet} {
      width: 9.5rem;
      height: 9.5rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 7.4rem;
      height: 7.4rem;
    }
    width: 12.8rem;
    height: 12.8rem;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle1};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;
  }
  margin-bottom: 0.5rem;
  line-height: 1.8;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraph2};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
  line-height: 1.8;
  margin-bottom: 1.7rem;
  letter-spacing: -0.04em;
  max-width: 74.9rem;
`;

const Caption = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray600};

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.1rem;
    }
  }

  & > img {
    margin-left: 0.9rem;
    margin-right: 0.6rem;
    @media ${({ theme }) => theme.device.mobile} {
      margin: 0;
    }
  }
`;
