import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  input {
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;

  stroke-width: 2px;
`;

interface StyledCheckboxProps {
  checked: boolean;
}
export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props =>
    props.checked ? props.theme.colors.primary : props.theme.colors.tertiary};
  border-radius: 1rem;
  transition: all 150ms;
  cursor: pointer;

  &:hover {
    ${Icon} {
      visibility: visible;
    }
    background: ${props => props.theme.colors.primary};
  }

  input:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
