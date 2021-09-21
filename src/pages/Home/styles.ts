import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr 1fr;
  grid-template-rows: 0.2fr 1.8fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'header header header'
    'side main main'
    'side main main';

  main {
    grid-area: main;
    padding: 3rem;

    h1 {
      font-weight: 300;
      color: ${({ theme }) => theme.colors.primary};
    }
    section {
      background: ${({ theme }) => theme.colors.secondary};
      max-height: 25rem;
      border-radius: 1rem;
      padding: 1rem;
    }
  }
`;

export const TableHeader = styled.div`
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
      background: none;
      border: none;
    }

    .action {
      border: 1px solid #312e38;
      margin: 0 1rem;
    }
    .apply {
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    .new_client {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.primary};
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
