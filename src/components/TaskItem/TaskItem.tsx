import React, { useEffect, useState, AnimationEvent } from 'react';
import clsx from 'clsx';

import { Button } from 'components';

import { TaskItemProps } from './types';

import { ReactComponent as IcCalendar } from 'assets/icons/icon_calendar.svg';
import { ReactComponent as IcTrash } from 'assets/icons/icon_trash.svg';
import { ReactComponent as IcEdit } from 'assets/icons/icon_edit.svg';
import styles from './TaskItem.module.scss';

const TaskItem = ({ item, onDelete, onComplete, counter }: TaskItemProps) => {
  const [isSlideOut, setIsSlideOut] = useState(false);

  const itemStyles: string = clsx(styles.item, {
    [styles.completed]: item.completed,
    [styles.cardSlideOut]: isSlideOut,
  });

  const completeTask = () => {
    onComplete(counter - 1);
  };

  const handleAnimationEnd = (e: AnimationEvent<HTMLLIElement>) => {
    onDelete(item.id);
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
        {/* todo: продумать логику/дизайн */}
        <Button onClick={completeTask}>Выполнено/Не выполнено</Button>
        <Button theme='outlined'>
          <IcEdit />
        </Button>
        <Button onClick={() => setIsSlideOut(true)} color='red' className={styles.deleteBtn}>
          <IcTrash />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
