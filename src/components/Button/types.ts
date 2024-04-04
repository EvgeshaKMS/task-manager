import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type TTheme = 'outlined' | 'filled';
type TColor = 'blue' | 'red';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: TTheme;
  color?: TColor;
  children?: ReactNode;
}
