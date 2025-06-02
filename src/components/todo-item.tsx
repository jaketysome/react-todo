import type { Task } from "../types/task";

function TodoItem({ task }: { task: Task }) {
  const handleOnChange = () => {};

  return (
    <li className='todo-item'>
      <span className='task-text'>{task.text}</span>
      <input
        id='task-complete'
        title='task-complete'
        type='checkbox'
        checked={task.isComplete}
        onChange={handleOnChange}
      />
    </li>
  );
}

export default TodoItem;
