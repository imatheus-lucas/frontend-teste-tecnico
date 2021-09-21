import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;

    .btn {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border-radius: 1rem;
      padding: 0 1rem;
      height: 2rem;
      background: ${({ theme }) => theme.colors.secondary};
      border: none;
    }

    .action {
      border: 1px solid #312e38;
      margin: 0 1rem;
      width: 10rem;

      &:hover {
        filter: brightness(0.95);
      }
    }
    .apply {
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &:hover {
        filter: brightness(0.95);
      }
    }

    .new_client {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.primary};
      font-size: 0.875rem;
      box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
      &:hover {
        filter: brightness(0.85);
      }
    }
  }

  .input__search {
    display: flex;
    height: 2rem;
    background: #f5f5f5;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    margin: 0 1rem;
    svg {
      font-size: 1.6rem;
      color: #312e38;
      margin-right: 1rem;
    }
    input {
      border: none;
      width: 100%;
      background: none;

      ::placeholder {
        color: #312e38;
      }
    }
  }
`;
