import React from "react";
import styled from "styled-components";

const ListFooter = () => {
  const pages = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
  return (
    <StyledWrapper>
      {pages.map((page, idx) => (
        <div key={idx}>{page}</div>
      ))}
    </StyledWrapper>
  );
};

export default ListFooter;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  margin-top: 1.1rem;
  padding-bottom: 8.7rem;
  width: 100%;
  justify-content: center;

  & > div {
    color: ${({ theme }) => theme.colors.gray600};
    font-size: ${({ theme }) => theme.fontSizes.page};
    line-height: 1.4rem;
    margin: 0 1.2rem;
  }
`;
