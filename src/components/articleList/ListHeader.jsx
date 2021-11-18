import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow.svg";

const ListHeader = () => {
<<<<<<< HEAD
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
=======
>>>>>>> 83cf7d9 (:tada: feat: 헤더 틀 잡기)
  return (
    <StyledWrapper>
      <div>
        <div className="tags">
<<<<<<< HEAD
          {tagData.map((tags, idx) => (
            <button key={`tag-${idx}`}>{tags}</button>
          ))}
=======
          <button>It</button>
          <button>인공지능</button>
          <button>스마트폰</button>
          <button>아이패드</button>
          <button>페이스북</button>
          <button>구글</button>
          <button>스마트폰</button>
          <button>애플</button>
          <button>아이패드</button>
          <button>UX</button>
          <button>아이폰</button>
          <button>모바일</button>
          <button>VR</button>
          <button>UI</button>
          <button>UI</button>
          <button>아이패드</button>
>>>>>>> 83cf7d9 (:tada: feat: 헤더 틀 잡기)
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
<<<<<<< HEAD
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
=======
>>>>>>> 83cf7d9 (:tada: feat: 헤더 틀 잡기)

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
<<<<<<< HEAD

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
=======
>>>>>>> 83cf7d9 (:tada: feat: 헤더 틀 잡기)
`;
