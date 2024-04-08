import React, { useCallback, useMemo, useState } from 'react';

import { Button, Popup, TaskItem, TextField } from 'components';
import { formatDate, formatDateToOriginal } from './utils/formatDate';

import { TTask } from './types/general';

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

  const [tasks, setTasks] = useState<TTask[]>([
    { id: 1, taskName: 'Название', date: '03.04.2024', time: '12:00', completed: false },
    { id: 2, taskName: 'Название2', date: '03.04.2024', time: '13:00', completed: true },
    { id: 3, taskName: 'Название3', date: '03.04.2024', time: '14:00', completed: false },
    { id: 4, taskName: 'Название4', date: '03.04.2024', time: '15:00', completed: false },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCreatePopup, setIsCreatePopup] = useState(true);
  const [indexOfTheTask, setIndexOfTheTask] = useState<number | null>(null);

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
        setTasks((prevState) => [
          ...prevState,
          {
            id: prevState.length + 1,
            taskName,
            date: formatDate(date),
            time,
            completed: false,
          },
        ]);
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

  const onDelete = (id: number) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onComplete = (index: number) => {
    tasks[index].completed = !tasks[index].completed;
    setTasks([...tasks]);
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
            {tasks.length > 0 &&
              tasks.map((task, index) => (
                <TaskItem
                  item={task}
                  onDelete={onDelete}
                  counter={index + 1}
                  onComplete={onComplete}
                  onEdit={() => onEditPopupOpen(index)}
                  key={task.id}
                />
              ))}
          </ul>

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
