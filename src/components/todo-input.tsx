import { useState, type Dispatch, type SetStateAction } from "react";
import type { Task, TodoListStatus } from "../types";

function TodoInput({
  status,
  setStatus,
  tasks,
  setTasks,
}: {
  status: TodoListStatus;
  setStatus: Dispatch<SetStateAction<TodoListStatus>>;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}) {
  const [newTask, setNewTask] = useState<Task>({ text: "", isComplete: false });

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ ...newTask, text: "" });
    setStatus("success");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStatus("typing");
    setNewTask({ ...newTask, text: e.target.value });
  };

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
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
