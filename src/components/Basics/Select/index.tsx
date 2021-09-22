import React, { SelectHTMLAttributes } from 'react';
import { InputSelect, SelectWrapper } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}
export default function Select({ children, ...props }: SelectProps) {
  return (
    <SelectWrapper>
      <InputSelect {...props}>{children}</InputSelect>
    </SelectWrapper>
  );
}
