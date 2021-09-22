import styled from 'styled-components';

export const Container = styled.nav`
  /* height: 100%; */
  flex: 1;
  max-width: 3rem;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;
export const NavLink = styled.a`
  padding: 0.675rem 0;
  margin-top: 0.475rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  svg {
    color: #312e38;
  }
  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
