export interface Task {
  text: string;
  isComplete: boolean;
}

export type TodoListStatus = "empty" | "typing" | "success";
