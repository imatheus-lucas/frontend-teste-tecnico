import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;

  height: 85%;
`;
export const ScrollingTable = styled.div`
  margin: 1rem 0;
  position: relative;
  height: 90%;
  overflow-y: scroll;
  padding-right: 1rem;
`;

export const THeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const Search = styled.div`
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

  thead {
    tr {
      line-height: 2.5rem;
      td + th {
        border-top-left-radius: 0.475rem;
        border-bottom-left-radius: 0.475rem;
      }

      th:last-child {
        border-top-right-radius: 0.475rem;
        border-bottom-right-radius: 0.475rem;
      }
    }

    th {
      background: ${({ theme }) => theme.colors.tertiary};
      padding: 0 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  tbody {
    tr {
      line-height: 4rem;
    }
  }
`;
