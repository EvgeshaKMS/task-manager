import { TTask } from 'types/general';

export interface TaskItemProps {
  item: TTask;
  onDelete: (id: number) => void;
  onComplete: (index: number) => void;
  counter: number;
  onEdit: () => void;
}
