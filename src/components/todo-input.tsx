import type { Task } from "../types/task";
import type { TodoListStatus } from "../types/todo-list";

function TodoInput({
  status,
  newTask,
  handleInputChange,
  handleNewTask,
}: {
  status: TodoListStatus;
  newTask: Task;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewTask: () => void;
}) {
  return (
    <div className='todo-input'>
      <input
        value={newTask.text}
        onChange={(e) => handleInputChange(e)}
        placeholder='Write your task here...'
      />
      <button
        type='button'
        disabled={status !== "typing"}
        onClick={handleNewTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
