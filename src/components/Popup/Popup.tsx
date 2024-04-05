import { useState, AnimationEvent, useEffect } from 'react';
import clsx from 'clsx';

import styles from './Popup.module.scss';
import { PopupProps } from './types';

const Popup = ({ isOpen, onClose, children, className = '' }: PopupProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const wrapperStyles: string = clsx(styles.wrapper, {
    [styles.onClose]: isClosing,
    [className]: className,
  });

  const popupStyles: string = clsx(styles.content, {
    [styles.onClose]: isClosing,
    [className]: className,
  });

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName.includes('fadeOut')) {
      onClose();
      setIsClosing(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      onClick={() => setIsClosing(true)}
      className={wrapperStyles}
    >
      <div className={popupStyles} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
