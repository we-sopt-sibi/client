import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ArrowIcon from "../../assets/icons/arrow.svg";

const ListHeader = () => {
  const initData = [
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
  const [tagData, setTagData] = useState(initData);
  const [added, setAdded] = useState(false);
  const [folded, setFolded] = useState("더보기");

  const calculateTagsNumber = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 360) {
      setTagData((currentArray) => {
        const newArray = [...currentArray];
        newArray.splice(3, 9);
        return newArray;
      });
    } else if (window.innerWidth <= 768) {
      setTagData((currentArray) => {
        const newArray = [...currentArray];
        newArray.splice(9, 20);
        return newArray;
      });
    }
  };

  useEffect(() => {
    calculateTagsNumber();
    window.addEventListener("resize", calculateTagsNumber);

    return () => {
      window.removeEventListener("resize", calculateTagsNumber);
    };
  }, []);

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
    setFolded("접기");
  };

  const removeTags = () => {
    setTagData((currentArray) => {
      const newArray = [...currentArray];
      newArray.splice(18, 28);
      return newArray;
    });
    setAdded(false);
    setFolded("더보기");
  };
  return (
    <StyledWrapper>
      <div>
        <TagStyled>
          {tagData.map((tags, idx) => (
            <button key={`tag-${idx}`}>{tags}</button>
          ))}
        </TagStyled>
        <MoreStyled onClick={added ? removeTags : addTags} added={added}>
          <div>{folded}</div>
          <img src={ArrowIcon} alt="arrow" />
        </MoreStyled>
      </div>
    </StyledWrapper>
  );
};

export default ListHeader;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 0 3.4rem;
  align-items: center;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.gray300}; */

  & > div {
    width: 120rem;
    display: flex;
    justify-content: space-between;
    @media ${({ theme }) => theme.device.tablet} {
      width: 70rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 32rem;
    }
  }
`;

const TagStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.tablet} {
    width: 62rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-right: 0.9rem;
    width: 27.5rem;
  }
  width: 100%;
  padding-bottom: 1.6rem;
  margin-right: 3.8rem;

  & > button {
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray600};
    border-radius: 1.4rem;
    line-height: 1;
    padding: 0.4rem 1rem;
    margin: 0 0.8rem;
    margin-bottom: 1rem;
    margin-left: 0;
    letter-spacing: -0.04em;
    align-items: center;
    height: 2.6rem;
  }
`;

const MoreStyled = styled.div`
  /* width: 4.3rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.6rem;
  line-height: 1.8;
  padding-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.gray600};

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.3rem;
    height: 100%;
  }

  & > img {
    transform: rotate(${({ added }) => added && "180deg"}); // rotate시키는 첫 번쨰 방법
    ${({ added }) =>
      added &&
      css`
        transform: rotate(180deg);
      `}; // rotate시키는 두 번째 방법
    margin-left: 0.3rem;
    width: 1rem;
    height: 1.1rem;
  }
`;
