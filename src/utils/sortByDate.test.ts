import '@testing-library/jest-dom';
import { sortByDate } from './sortByDate';
import { v4 as uuidv4 } from 'uuid';
import { TTask } from '../types/general';

describe('date sorting', () => {
  const array: TTask[] = [
    {
      id: '1',
      taskName: 'Название1',
      date: '01.04.2024',
      time: '13:04',
      completed: false,
    },
    {
      id: '2',
      taskName: 'Название2',
      date: '02.04.2024',
      time: '13:04',
      completed: false,
    },
    {
      id: '3',
      taskName: 'Название3',
      date: '01.04.2024',
      time: '13:00',
      completed: false,
    },
  ];
  const arraySorted: TTask[] = [
    {
      id: '3',
      taskName: 'Название3',
      date: '01.04.2024',
      time: '13:00',
      completed: false,
    },
    {
      id: '1',
      taskName: 'Название1',
      date: '01.04.2024',
      time: '13:04',
      completed: false,
    },
    {
      id: '2',
      taskName: 'Название2',
      date: '02.04.2024',
      time: '13:04',
      completed: false,
    },
  ];
  it('should sort array by date', function () {
    expect(array.sort(sortByDate)).toEqual(arraySorted);
    expect(array.sort(sortByDate)).toHaveLength(3);
    expect(array.sort(sortByDate)).toContainEqual({
      id: '2',
      taskName: 'Название2',
      date: '02.04.2024',
      time: '13:04',
      completed: false,
    });
  });
});
