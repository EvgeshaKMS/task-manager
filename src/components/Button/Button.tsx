import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';
import styles from './Button.module.scss';

const Button = ({
  theme = 'filled',
  className = '',
  children,
  color = 'blue',
  ...props
}: ButtonProps) => {
  const buttonStyle: string = clsx(styles.button, {
    [className]: className,
    [styles.filled]: theme === 'filled',
    [styles.outlined]: theme === 'outlined',
    [styles.red]: color === 'red',
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
