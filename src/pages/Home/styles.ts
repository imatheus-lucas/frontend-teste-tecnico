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

export const PaginationItem = styled.div`
  padding: 5px 9px;

  margin: 0 5px;
  border-radius: 5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
  }
`;
