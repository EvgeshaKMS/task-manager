import React from 'react';

import { Button } from 'components';

import { TaskItemProps } from './types';

import { ReactComponent as IcCalendar } from 'assets/icons/icon_calendar.svg';
import { ReactComponent as IcTrash } from 'assets/icons/icon_trash.svg';
import styles from './TaskItem.module.scss';
import clsx from 'clsx';

const TaskItem = ({ item, onDelete, onComplete, counter }: TaskItemProps) => {
  const itemStyles: string = clsx(styles.item, {
    [styles.completed]: item.completed,
  });

  return (
    <li className={itemStyles}>
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
        <Button onClick={onComplete}>Выполнено/Не выполнено</Button>
        <Button theme='outlined'>Редактировать</Button>
        <Button onClick={onDelete} color='red' className={styles.deleteBtn}>
          <IcTrash />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
