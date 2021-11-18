import styled from "styled-components";

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
  line-height: 1.8;

  & + section {
    margin-top: ${(props) => (props.isProfile ? "margin-top: 1.9rem" : "margin-top: 1.3rem")};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main};

    & > div {
      visibility: visible;
      border-color: ${({ theme }) => theme.colors.main};
    }
  }

  & > div {
    visibility: hidden;
    width: 2.5rem;
    border: 0.05rem solid ${({ theme }) => theme.colors.black};
  }

  & > span {
    cursor: pointer;
    margin: 0 0.9rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.page};

    & + section {
      margin-top: 1.2rem;
    }
  }
`;
