import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow.svg";

const ListHeader = () => {
  const tagData = [
    "IT",
    "인공지능",
    "스마트폰",
    "아이패드",
    "인스타그램",
    "아이패드",
    "페이스북",
    "구글",
    "스마트폰",
    "애플",
    "아이패드",
    "UX",
    "아이폰",
    "모바일",
    "VR",
    "UI",
    "UI",
    "아이패드",
  ];
  return (
    <StyledWrapper>
      <div>
        <div className="tags">
          {tagData.map((tags, idx) => (
            <button key={`tag-${idx}`}>{tags}</button>
          ))}
        </div>
        <div className="more">
          <span>더보기</span>
          <img src={ArrowIcon} alt="arrow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ListHeader;

const StyledWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  & > div:first-child {
    width: 120rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.6rem;
  }
  .tags {
    display: flex;
    width: 108.5rem;
  }

  .tags button {
    margin-right: 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray600};
    border-radius: 1.4rem;
    line-height: 1;
    padding: 0.4rem 1rem;
    letter-spacing: -0.04em;
    align-items: center;
  }

  .more {
    display: flex;
    justify-content: center;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.gray600};
  }

  .more img {
    margin-left: 0.3rem;
  }
`;
