import React, { useState, AnimationEvent } from 'react';
import clsx from 'clsx';

import { Button } from 'components';

import { TaskItemProps } from './types';
import { ReactComponent as IcCalendar } from 'assets/icons/icon_calendar.svg';
import { ReactComponent as IcTrash } from 'assets/icons/icon_trash.svg';
import { ReactComponent as IcEdit } from 'assets/icons/icon_edit.svg';
import { ReactComponent as IcCheck } from 'assets/icons/icon_check-circle.svg';
import styles from './TaskItem.module.scss';

const TaskItem = ({ item, onDelete, onComplete, onEdit, counter }: TaskItemProps) => {
  const [isSlideOut, setIsSlideOut] = useState(false);

  const itemStyles: string = clsx(styles.item, {
    [styles.completed]: item.completed,
    [styles.cardSlideOut]: isSlideOut,
  });

  const handleAnimationEnd = (e: AnimationEvent<HTMLLIElement>) => {
    if (e.animationName.includes('slideOut')) onDelete();
  };

  return (
    <li onAnimationEnd={handleAnimationEnd} className={itemStyles}>
      <p>
        {counter}. {item.taskName}
      </p>
      <p>
        <IcCalendar />
        <span>
          {item.date}, {item.time}
        </span>
      </p>
      <div className={styles.buttons}>
        <Button onClick={onComplete} theme={item.completed ? 'outlined' : 'filled'}>
          <IcCheck />
        </Button>
        <Button onClick={() => onEdit()} theme='outlined'>
          <IcEdit />
        </Button>
        <Button className={styles.deleteBtn} onClick={() => setIsSlideOut(true)} color='red'>
          <IcTrash />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
