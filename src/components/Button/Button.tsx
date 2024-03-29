import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';
import styles from './Button.module.scss';

const Button = ({ theme = 'filled', className = '', children, ...props }: ButtonProps) => {
  const buttonStyle: string = clsx(styles.button, {
    [className]: className,
    [styles.filled]: theme === 'filled',
    [styles.outlined]: theme === 'outlined',
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
