import React from "react";
import styled from "styled-components";

const ListItem = () => {
  return <StyledWrapper>listitem</StyledWrapper>;
};

export default ListItem;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 17rem;
`;
