import styled from 'styled-components';

export const Container = styled.div`
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
    padding: 2rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;

    height: 85%;
  }
`;
export const ScrollingTable = styled.div`
  position: relative;
  margin: 1rem 0;
  height: 90%;
  overflow-y: scroll;
  padding-right: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.775rem;

  tr {
    line-height: 2.5rem;
  }

  th + th {
    background: #f2f3f5;
    padding: 0 1rem;
  }

  tbody {
    tr {
      line-height: 4rem;
    }
    td + td {
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.775rem;
      padding: 0 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
  }
`;

export const Pagination = styled.div`
  margin-top: 1rem;
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
