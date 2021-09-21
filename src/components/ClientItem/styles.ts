import styled from 'styled-components';

export const Container = styled.tr`
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
`;
