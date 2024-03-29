import React from 'react';
import clsx from 'clsx';

import { TextFieldProps } from './types';
import styles from './TextField.module.scss';

const TextField = ({
  label,
  className = '',
  wrapperClassName = '',
  id,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const wrapperStyles = clsx(styles.wrapper, {
    wrapperClassName: wrapperClassName,
  });

  const inputStyles = clsx(styles.input, { className: className });

  return (
    <div className={wrapperStyles}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputStyles} type={type} {...props} />
    </div>
  );
};

export default TextField;
