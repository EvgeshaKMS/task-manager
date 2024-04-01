import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  className?: string;
}
