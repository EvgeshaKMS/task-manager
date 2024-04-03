import { useState } from 'react';

import { Button, TaskItem, TextField } from 'components';
import { formatDate } from './utils/formatDate';

import { TTask } from './types/general';

import './assets/styles/normalize.scss';
import './assets/styles/theme.scss';
import styles from './App.module.scss';

function App() {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState<TTask[]>([
    { id: 1, taskName: 'Название', date: '03.04.2024', time: '12:00' },
    { id: 2, taskName: 'Название2', date: '03.04.2024', time: '13:00' },
    { id: 3, taskName: 'Название3', date: '03.04.2024', time: '14:00' },
    { id: 4, taskName: 'Название4', date: '03.04.2024', time: '15:00' },
  ]);

  // todo: сделать сообщения валидации

  const onSubmit = () => {
    if (!taskName) {
      console.log('task');
    }
    if (!date) {
      console.log('date');
    }
    if (!time) {
      console.log('time');
    }

    if (taskName && date && time) {
      setTasks((prevState) => [
        ...prevState,
        {
          id: prevState.length + 1,
          taskName,
          date: formatDate(date),
          time,
        },
      ]);
      setTaskName('');
      setDate('');
      setTime('');
    }
  };

  const onDelete = (id: number) => {
    setTasks((prevState) => prevState.filter((item) => item.id !== id));
    console.log(tasks);
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
            />

            <div className={styles.group}>
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
            </div>
            <Button onClick={onSubmit}>Создать</Button>
          </div>

          <ul className={styles.section}>
            {tasks.length > 0 &&
              tasks.map((task) => <TaskItem item={task} onDelete={onDelete} key={task.id} />)}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
