import { TTask } from 'types/general';

export interface TaskItemProps {
  item: TTask;
  onDelete: () => void;
  onComplete: () => void;
  counter: number;
  onEdit: () => void;
}
