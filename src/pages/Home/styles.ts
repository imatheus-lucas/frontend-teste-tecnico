import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 3rem);
`;
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
export const Main = styled.main`
  flex: 1;
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 3rem;
  h1 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  section {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
  }
`;
export const ScrollingTable = styled.div`
  height: 15rem;
  overflow: auto;
  margin-top: 1rem;
  padding: 1rem;
`;

export const Table = styled.table`
  color: #312e38;

  text-align: left;
  border-collapse: collapse;
  width: 100%;
  thead {
    line-height: 3rem;
  }

  thead {
    th {
      font-size: 0.775rem;
      color: ${({ theme }) => theme.colors.primary};
      svg {
        margin-left: 0.875rem;
      }
    }
    th + th {
      padding: 0 1rem;
      background: #f2f3f5;
    }
  }

  tbody {
    tr {
      padding: 4rem 0;
    }
    td + td {
      padding: 0 1rem;

      border-bottom: 1px solid #ddd;
    }
    div {
      display: flex;
      flex-direction: row;
    }
    button {
      border: none;
      width: 37px;
      height: 37px;
      border-radius: 50px;
      transition: filter ease-in-out 0.2s;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.8);
      }
    }
    td {
      height: 3rem;
    }

    td:last-child {
      div {
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;

export const Pagination = styled.div`
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
`;
export const PaginatiionButton = styled.div``;
export const PaginationItem = styled.div``;
