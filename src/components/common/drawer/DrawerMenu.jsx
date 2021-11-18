import styled, { css } from "styled-components";

const DrawerMenu = ({ menu, isProfile }) => {
  return (
    <StyledMenu isProfile={isProfile}>
      <div />
      <span>{menu}</span>
      <div />
    </StyledMenu>
  );
};

export default DrawerMenu;

const StyledMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
  line-height: 1.8;

  ${(props) =>
    props.isProfile
      ? css`
          & + section {
            margin-top: 1.9rem;
          }
        `
      : css`
          & + section {
            margin-top: 1.3rem;
          }
        `}

  &:hover {
    color: ${({ theme }) => theme.colors.main};

    & > div {
      visibility: visible;
      border-color: ${({ theme }) => theme.colors.main};
    }
  }

  & > div {
    visibility: hidden;
    flex: 1;
    border: 0.05rem solid ${({ theme }) => theme.colors.black};
  }

  & > span {
    cursor: pointer;
    margin: 0 0.9rem;
  }
`;
