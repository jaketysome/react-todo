import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../types";
import cn from "classnames";
import { sortByComplete } from "../lib/helpers/taskSorter";

function TodoItem({
  index,
  task,
  tasks,
  setTasks,
}: {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  const handleOnChange = () => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTasks(sortByComplete(updatedTasks));
  };

  const handleRemoveTask = () => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <li className={cn("todo-item", task.isComplete && "completed")}>
      <span className='task-text'>{task.text}</span>
      <input
        id='task-complete'
        title='task-complete'
        type='checkbox'
        checked={task.isComplete}
        onChange={handleOnChange}
      />
      <button type='button' onClick={handleRemoveTask}>
        x
      </button>
    </li>
  );
}

export default TodoItem;
