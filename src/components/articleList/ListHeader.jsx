import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow.svg";

const ListHeader = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="tags">
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
`;
