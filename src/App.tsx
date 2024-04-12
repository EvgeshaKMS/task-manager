import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Pagination, Popup, TaskItem, TextField } from 'components';
import { formatDate, formatDateToOriginal } from './utils/formatDate';
import { sortByDate } from './utils/sortByDate';

import { TTask } from './types/general';

import { ReactComponent as IcFile } from 'assets/icons/icon_file.svg';
import './assets/styles/normalize.scss';
import './assets/styles/theme.scss';
import styles from './App.module.scss';

function App() {
  // inputs
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // validation messages
  const [taskNameValidation, setTaskNameValidation] = useState('');
  const [dateValidation, setDateValidation] = useState('');
  const [timeValidation, setTimeValidation] = useState('');

  const [tasks, setTasks] = useState<TTask[]>(
    [
      { id: uuidv4(), taskName: 'Название', date: '14.04.2024', time: '12:00', completed: false },
      { id: uuidv4(), taskName: 'Название3', date: '02.04.2024', time: '14:02', completed: true },
      { id: uuidv4(), taskName: 'Название4', date: '02.04.2024', time: '14:01', completed: false },
      { id: uuidv4(), taskName: 'Название2', date: '01.04.2024', time: '13:00', completed: false },
      {
        id: uuidv4(),
        taskName: 'Название123',
        date: '01.04.2024',
        time: '13:20',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название231',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название2xzZx',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      { id: uuidv4(), taskName: 'Нdwdqw', date: '01.04.2024', time: '13:02', completed: true },
      { id: uuidv4(), taskName: 'Название', date: '14.04.2024', time: '12:00', completed: false },
      { id: uuidv4(), taskName: 'Название3', date: '02.04.2024', time: '14:02', completed: true },
      { id: uuidv4(), taskName: 'Название4', date: '02.04.2024', time: '14:01', completed: false },
      { id: uuidv4(), taskName: 'Название2', date: '01.04.2024', time: '13:00', completed: false },
      {
        id: uuidv4(),
        taskName: 'Название123',
        date: '01.04.2024',
        time: '13:20',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название231',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название2xzZx',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      { id: uuidv4(), taskName: 'Нdwdqw', date: '01.04.2024', time: '13:02', completed: true },
      { id: uuidv4(), taskName: 'Название', date: '14.04.2024', time: '12:00', completed: false },
      { id: uuidv4(), taskName: 'Название3', date: '02.04.2024', time: '14:02', completed: true },
      { id: uuidv4(), taskName: 'Название4', date: '02.04.2024', time: '14:01', completed: false },
      { id: uuidv4(), taskName: 'Название2', date: '01.04.2024', time: '13:00', completed: false },
      {
        id: uuidv4(),
        taskName: 'Название123',
        date: '01.04.2024',
        time: '13:20',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название231',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название2xzZx',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      { id: uuidv4(), taskName: 'Нdwdqw', date: '01.04.2024', time: '13:02', completed: true },
      { id: uuidv4(), taskName: 'Название', date: '14.04.2024', time: '12:00', completed: false },
      { id: uuidv4(), taskName: 'Название3', date: '02.04.2024', time: '14:02', completed: true },
      { id: uuidv4(), taskName: 'Название4', date: '02.04.2024', time: '14:01', completed: false },
      { id: uuidv4(), taskName: 'Название2', date: '01.04.2024', time: '13:00', completed: false },
      {
        id: uuidv4(),
        taskName: 'Название123',
        date: '01.04.2024',
        time: '13:20',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название231',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название2xzZx',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      { id: uuidv4(), taskName: 'Нdwdqw', date: '01.04.2024', time: '13:02', completed: true },
      { id: uuidv4(), taskName: 'Название', date: '14.04.2024', time: '12:00', completed: false },
      { id: uuidv4(), taskName: 'Название3', date: '02.04.2024', time: '14:02', completed: true },
      { id: uuidv4(), taskName: 'Название4', date: '02.04.2024', time: '14:01', completed: false },
      { id: uuidv4(), taskName: 'Название2', date: '01.04.2024', time: '13:00', completed: false },
      {
        id: uuidv4(),
        taskName: 'Название123',
        date: '01.04.2024',
        time: '13:20',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название231',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      {
        id: uuidv4(),
        taskName: 'Название2xzZx',
        date: '01.04.2024',
        time: '13:04',
        completed: false,
      },
      { id: uuidv4(), taskName: 'Нdwdqw', date: '01.04.2024', time: '13:02', completed: true },
    ].sort(sortByDate),
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCreatePopup, setIsCreatePopup] = useState(true);
  const [indexOfTheTask, setIndexOfTheTask] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  const resetValues = () => {
    setTaskName('');
    setDate('');
    setTime('');
    setTaskNameValidation('');
    setDateValidation('');
    setTimeValidation('');
  };

  const onSubmit = () => {
    const isError = !taskName || !date || !time;

    if (isError) {
      setTaskNameValidation(taskName ? '' : 'Поле Задача обязательно для заполнения');
      setDateValidation(date ? '' : 'Поле Дата обязательно для заполнения');
      setTimeValidation(time ? '' : 'Поле Время обязательно для заполнения');
    }

    if (!isError) {
      if (indexOfTheTask === null) {
        setTasks((prevState) =>
          [
            ...prevState,
            {
              id: uuidv4(),
              taskName,
              date: formatDate(date),
              time,
              completed: false,
            },
          ].sort(sortByDate),
        );
      }

      if (indexOfTheTask !== null) {
        tasks[indexOfTheTask].taskName = taskName;
        tasks[indexOfTheTask].date = formatDate(date);
        tasks[indexOfTheTask].time = time;
        setTasks([...tasks]);
      }

      onPopupClose();
    }
  };

  const onDelete = (id: string) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onComplete = (index: number) => {
    tasks[index].completed = !tasks[index].completed;
    setTasks([...tasks]);
  };

  const paginatedList = () => {
    return tasks.filter((task, index) => index + 1 >= (page - 1) * 5 && index + 1 <= page * 5);
  };

  const onEditPopupOpen = (index: number) => {
    setIndexOfTheTask(index);
    setIsCreatePopup(false);

    setTaskName(tasks[index].taskName);
    setDate(formatDateToOriginal(tasks[index].date));
    setTime(tasks[index].time);

    setIsPopupOpen(true);
  };

  const onPopupClose = () => {
    setIsPopupOpen(false);
    resetValues();
  };

  return (
    <div className='App'>
      <main>
        <div className={styles.container}>
          <h1>Менеджер задач</h1>

          <Button
            onClick={() => {
              setIndexOfTheTask(null);
              setIsCreatePopup(true);
              setIsPopupOpen(true);
            }}
          >
            Создать
          </Button>

          <ul className={styles.section}>
            {paginatedList().length > 0 ? (
              paginatedList().map((task, index) => (
                <TaskItem
                  item={task}
                  onDelete={() => onDelete(task.id)}
                  counter={index + 1}
                  onComplete={() => onComplete(index)}
                  onEdit={() => onEditPopupOpen(index)}
                  key={task.id}
                />
              ))
            ) : (
              <div className={styles.plug}>
                <IcFile />
                <h2>Список пуст!</h2>
              </div>
            )}
          </ul>

          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={Math.ceil(tasks.length / 5)}
          />

          <Popup isOpen={isPopupOpen} onClose={onPopupClose} className={styles.popup}>
            <h2>{isCreatePopup ? 'Создание задачи' : 'Редактирование задачи'}</h2>

            <TextField
              label='Задача'
              id='taskName'
              required
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              validationMessage={taskNameValidation}
            />

            <div className={styles.group}>
              <TextField
                label='Дата'
                id='date'
                type='date'
                required
                value={date}
                onChange={(event) => setDate(event.target.value)}
                validationMessage={dateValidation}
              />
              <TextField
                label='Время'
                id='time'
                type='time'
                required
                value={time}
                onChange={(event) => setTime(event.target.value)}
                validationMessage={timeValidation}
              />
            </div>
            <Button onClick={onSubmit}>{isCreatePopup ? 'Создать' : 'Редактировать'}</Button>
          </Popup>
        </div>
      </main>
    </div>
  );
}

export default App;
