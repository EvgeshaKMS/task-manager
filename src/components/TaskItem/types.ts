import { TTask } from 'types/general';

export interface TaskItemProps {
  item: TTask;
  onDelete: (id: number) => void;
}
