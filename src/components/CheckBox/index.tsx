import { InputHTMLAttributes } from 'react';
import { CheckboxContainer, Icon, StyledCheckbox } from './styles';
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  className?: string | undefined;
}
export default function CheckBox({
  checked,
  className,
  ...props
}: CheckBoxProps) {
  return (
    <CheckboxContainer className={className}>
      <input type="checkbox" checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}
