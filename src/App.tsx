import React, { useState } from 'react';

import { Button, TextField } from './components';

import './assets/styles/normalize.scss';
import styles from './App.module.scss';
import { formatDate } from './utils/formatDate';
import { TTask } from './types/general';

function App() {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState<TTask[]>([]);

  console.log(tasks);

  const onSubmit = () => {
    if (taskName && date && time) {
      setTasks((prevState) => [...prevState, { taskName, date: formatDate(date), time }]);
      setTaskName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div className='App'>
      <main>
        <div className={styles.container}>
          <h1>Менеджер задач</h1>

          <section className={styles.section}>
            <h2>Создание задачи</h2>

            <TextField
              label='Задача'
              id='taskName'
              required
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
            <TextField
              label='Дата'
              id='date'
              type='date'
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <TextField
              label='Время'
              id='time'
              type='time'
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />

            <Button onClick={onSubmit}>Создать</Button>
          </section>

          {/* todo: создать компоненту для таска, сделать сообщение валидации */}
          <ul className={styles.section}>
            {tasks.length > 0 &&
              tasks.map((task, index) => (
                <li key={index}>
                  <p>
                    {index + 1}. {task.taskName}
                  </p>
                  <p>
                    {task.date}, {task.time}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
