import styled from 'styled-components';

export const Container = styled.div`
  width: 3rem;
  height: calc(100vh - 3rem);
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  grid-area: side;

  a {
    padding: 0.675rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    svg {
      color: #312e38;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.primary};

      svg {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .active {
    background: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
