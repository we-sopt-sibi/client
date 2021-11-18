import React from "react";
import styled from "styled-components";

const WriterList = () => {
  return <StyledWrapper>aside</StyledWrapper>;
};

export default WriterList;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 3.6rem;
`;
