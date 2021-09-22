import React from 'react';

import { Container } from './styles';

export interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}: ButtonProps) {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
}
