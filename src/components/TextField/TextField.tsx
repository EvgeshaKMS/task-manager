import React from 'react';
import clsx from 'clsx';

import { TextFieldProps } from './types';
import styles from './TextField.module.scss';

const TextField = ({
  label,
  className = '',
  wrapperClassName = '',
  type = 'text',
  validationMessage,
  required,
  ...props
}: TextFieldProps) => {
  const wrapperStyles = clsx(styles.wrapper, {
    wrapperClassName: wrapperClassName,
  });

  const inputStyles = clsx(styles.input, { className: className });

  return (
    <div className={wrapperStyles}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input className={inputStyles} type={type} {...props} />

      {validationMessage && <span className={styles.validation}>{validationMessage}</span>}
    </div>
  );
};

export default TextField;
