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
    padding: 3rem 1rem;

    h1 {
      font-weight: 300;
      color: ${({ theme }) => theme.colors.primary};
    }
    section {
      background: ${({ theme }) => theme.colors.secondary};
      min-height: 25rem;
      border-radius: 1rem;
      padding: 1rem;
    }

    .footer {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > span {
        color: #312e38;
        opacity: 0.6;
      }

      > div {
        svg {
          font-size: larger;
        }
        span {
          padding: 5px 9px;
          color: #312e38;

          margin: 0 5px;
          border-radius: 5rem;
          font-size: 0.8rem;
          cursor: pointer;

          &:hover,
          &.active {
            background: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.secondary};
            box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
          }
        }
      }

      button {
        background: none;
        border: none;
      }
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

export const TableContainer = styled.div`
  width: 100%;
  color: #312e38;
  margin-top: 1rem;
  overflow: auto;
  table {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
  }

  thead {
    height: 3rem;

    th {
      font-size: 0.775rem;
      color: ${({ theme }) => theme.colors.primary};

      svg {
        margin-left: 0.875rem;
      }
    }
  }

  td {
    height: 4rem;
  }
  th + th {
    padding: 0 1rem;
    background: #f2f3f5;
  }

  td + td {
    padding: 0 1rem;
    border-bottom: 1px solid #ddd;
  }

  tbody {
    button {
      border: none;
      width: 37px;
      height: 37px;
      border-radius: 50px;
      transition: filter ease-in-out 0.2s;
      margin-right: 1rem;
      &:hover {
        filter: brightness(0.8);
      }
    }

    td:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
