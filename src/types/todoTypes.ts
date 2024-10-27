export type TodoType = {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  updatedAt?: Date | null;
  createdAt?: Date;
};
