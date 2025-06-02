import type { Task } from "../../types";

export function sortByComplete(tasks: Task[]) {
  return tasks.sort((a, b) => (a.isComplete ? 0 : b ? -1 : 1));
}
