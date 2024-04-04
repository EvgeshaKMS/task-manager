import { useState } from 'react';

import { Button, TaskItem, TextField } from 'components';
import { formatDate } from './utils/formatDate';

import { TTask } from './types/general';

import './assets/styles/normalize.scss';
import './assets/styles/theme.scss';
import styles from './App.module.scss';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskNameValidation, setTaskNameValidation] = useState('');
  const [date, setDate] = useState('');
  const [dateValidation, setDateValidation] = useState('');
  const [time, setTime] = useState('');
  const [timeValidation, setTimeValidation] = useState('');
  const [tasks, setTasks] = useState<TTask[]>([
    { id: 1, taskName: 'Название', date: '03.04.2024', time: '12:00', completed: false },
    { id: 2, taskName: 'Название2', date: '03.04.2024', time: '13:00', completed: true },
    { id: 3, taskName: 'Название3', date: '03.04.2024', time: '14:00', completed: false },
    { id: 4, taskName: 'Название4', date: '03.04.2024', time: '15:00', completed: false },
  ]);

  const onSubmit = () => {
    if (!taskName) {
      setTaskNameValidation('Поле Задача обязательно для заполнения');
    }
    if (!date) {
      setDateValidation('Поле Дата обязательно для заполнения');
    }
    if (!time) {
      setTimeValidation('Поле Время обязательно для заполнения');
    }

    if (taskName && date && time) {
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
      setTaskName('');
      setDate('');
      setTime('');
      setTaskNameValidation('');
      setDateValidation('');
      setTimeValidation('');
    }
  };

  const onDelete = (id: number) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onComplete = (index: number) => {
    tasks[index].completed = !tasks[index].completed;
    setTasks([...tasks]);
  };

  return (
    <div className='App'>
      <main>
        <div className={styles.container}>
          <h1>Менеджер задач</h1>

          <div className={styles.section}>
            <h2>Создание задачи</h2>

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
            <Button onClick={onSubmit}>Создать</Button>
          </div>

          <ul className={styles.section}>
            {tasks.length > 0 &&
              tasks.map((task, index) => (
                <TaskItem
                  item={task}
                  onDelete={() => onDelete(task.id)}
                  counter={index + 1}
                  onComplete={() => onComplete(index)}
                  key={task.id}
                />
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
