import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;
export const Main = styled.main`
  flex: 1;
  max-height: calc(100vh - 3rem);
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 3rem;
  h1 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  small {
    color: #312e38;
    opacity: 0.6;
  }

  div {
    display: flex;
    align-items: center;
  }
`;
export const PaginatiionButton = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  border: none;

  font-size: larger;
  border-radius: 1rem;
  transition: filter ease-in-out 0.2s;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

const hoverAndActiveStyle = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
`;

interface PaginationItemProps {
  active?: boolean;
}
export const PaginationItem = styled.div<PaginationItemProps>`
  padding: 5px 9px;

  margin: 0 5px;
  border-radius: 5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    ${hoverAndActiveStyle}
  }

  ${({ active }) => active && hoverAndActiveStyle}
`;
