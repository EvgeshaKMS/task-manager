import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type TTheme = 'outlined' | 'filled';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: TTheme;
  children?: ReactNode;
}
