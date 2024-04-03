import React from 'react';

import { Button } from 'components';

import { TaskItemProps } from './types';
import styles from './TaskItem.module.scss';

const TaskItem = ({ item, onDelete }: TaskItemProps) => {
  return (
    <li className={styles.item}>
      <p>
        {item.id}. {item.taskName}
      </p>
      <p>
        {item.date}, {item.time}
      </p>
      <div className={styles.buttons}>
        {/* todo: продумать логику/дизайн */}
        <Button>Выполнено/Не выполнено</Button>
        <Button theme='outlined'>Редактировать</Button>
        <Button onClick={() => onDelete(item.id)}>Удалить</Button>
      </div>
    </li>
  );
};

export default TaskItem;
