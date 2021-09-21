import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  grid-area: header;

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  div {
    display: flex;
    margin-right: 3rem;

    button {
      background: none;
      border: none;
      min-width: 12rem;
      background: ${({ theme }) => theme.colors.buttons.primary};
      border-radius: 2rem;
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(90%);
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 5rem;
        object-fit: cover;
      }

      span {
        font-size: 0.675rem;
        color: ${({ theme }) => theme.colors.secondary};
        margin: 0 1rem;
      }
    }
  }
`;
