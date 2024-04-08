import { useState, AnimationEvent, useEffect } from 'react';
import clsx from 'clsx';

import { PopupProps } from './types';
import { ReactComponent as IcClose } from 'assets/icons/icon_close.svg';
import styles from './Popup.module.scss';

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

  const handleClosingAnimationStart = () => {
    setIsClosing(true);
  };

  const handleClosingAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
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
      onAnimationEnd={handleClosingAnimationEnd}
      onClick={handleClosingAnimationStart}
      className={wrapperStyles}
    >
      <div className={popupStyles} onClick={(event) => event.stopPropagation()}>
        {children}

        <button onClick={handleClosingAnimationStart} className={styles.closeBtn}>
          <IcClose />
        </button>
      </div>
    </div>
  );
};

export default Popup;
