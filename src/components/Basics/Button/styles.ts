import styled from 'styled-components';

import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  background-color: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.primary};

  padding: 0 1.2rem;
  height: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 1rem;
  border: ${props =>
    props.outlined ? `1px solid ${props.theme.colors.primary}` : 'none'};
  color: ${props =>
    props.outlined
      ? `${props.theme.colors.primary}`
      : `${props.theme.colors.tertiary}`};
  cursor: pointer;
  font-size: 0.775rem;
  box-shadow: ${props =>
    props.outlined ? `none` : `0px 0px 5px ${props.theme.colors.primary}`};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }
  :active:not(:disabled) {
    filter: brightness(0.5);
  }
`;
