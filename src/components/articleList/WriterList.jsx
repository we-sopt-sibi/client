import React from "react";
import styled from "styled-components";
import ListAside from "./ListAside";
import Writer1 from "../../assets/images/writer1.png";
import Writer2 from "../../assets/images/writer2.png";
import Writer3 from "../../assets/images/writer3.png";
import Writer4 from "../../assets/images/writer4.png";
import Writer5 from "../../assets/images/writer5.png";
import Writer6 from "../../assets/images/writer6.png";

const WriterList = () => {
  const writers = [
    {
      writerProfile: Writer3,
      writerName: "정헤인",
      writerPosts: 42,
      writerSubs: 183,
    },
    {
      writerProfile: Writer4,
      writerName: "이지현",
      writerPosts: 27,
      writerSubs: 145,
    },
    {
      writerProfile: Writer1,
      writerName: "SOPT",
      writerPosts: 123,
      writerSubs: 402,
    },
    {
      writerProfile: Writer2,
      writerName: "ux designer",
      writerPosts: 56,
      writerSubs: 234,
    },
    {
      writerProfile: Writer5,
      writerName: "솝트개발자",
      writerPosts: 56,
      writerSubs: 234,
    },
    {
      writerProfile: Writer6,
      writerName: "솝트디자이너",
      writerPosts: 88,
      writerSubs: 123,
    },
  ];
  return (
    <StyledWrapper>
      <div>추천작가</div>
      {writers.map((writer, idx) => (
        <ListAside key={idx} writer={writer} />
      ))}
      <div></div>
    </StyledWrapper>
  );
};

export default WriterList;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  & > div:first-child {
    height: 4.1rem;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray700};
    letter-spacing: -0.04em;
    padding-left: 2.2rem;
  }

  & > div:last-child {
    height: 1.6rem;
  }
`;
