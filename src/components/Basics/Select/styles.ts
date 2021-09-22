import styled from 'styled-components';
export const SelectWrapper = styled.div`
  position: relative;
  margin: 0 2rem;
  &::after {
    content: '▼';
    font-size: 0.475rem;
    top: 0.7rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
  }
`;
export const InputSelect = styled.select`
  width: 100%;
  height: 2rem;
  background: white;
  color: ${({ theme }) => theme.colors.text};
  min-width: 8rem;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 1rem;
  padding: 0 2rem;
  -webkit-appearance: none;
  appearance: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
