import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/arrow.svg";

const ListHeader = () => {
  const [tagData, setTagData] = useState([
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
  ]);
  const [added, setAdded] = useState(false);

  const addTags = () => {
    setTagData((currentArray) => [
      ...currentArray,
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
      "IT",
      "인공지능",
      "스마트폰",
      "아이패드",
      "페이스북",
      "스마트폰",
      "애플",
      "UX",
      "아이폰",
      "VR",
    ]);
    setAdded(true);
  };

  const removeTags = () => {
    setTagData((currentArray) => {
      const newArray = [...currentArray];
      newArray.splice(18, 28);
      return newArray;
    });
    setAdded(false);
  };
  return (
    <StyledWrapper>
      <div>
        <TagStyled>
          {tagData.map((tags, idx) => (
            <button key={`tag-${idx}`}>{tags}</button>
          ))}
        </TagStyled>
        <MoreStyled onClick={added ? removeTags : addTags} className="more">
          <span>더보기</span>
          <img src={ArrowIcon} alt="arrow" />
        </MoreStyled>
      </div>
    </StyledWrapper>
  );
};

export default ListHeader;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  position: relative;

  & > div {
    width: 120rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2.6rem;
  }
`;

const TagStyled = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 108.5rem;
  height: 100%;

  & > button {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray600};
    border-radius: 1.4rem;
    line-height: 1;
    padding: 0.4rem 1rem;
    margin: 0.5rem 0.8rem;
    margin-left: 0;
    letter-spacing: -0.04em;
    align-items: center;
  }
`;

const MoreStyled = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray600};

  & > img {
    margin-left: 0.3rem;
  }
`;
