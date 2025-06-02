import { useState } from "react";
import type { Task } from "../types/task";

function TodoInput({ setTasks }: { setTasks: (newTask: Task) => void }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmitTask = () => {
    setTasks({ text: newTask, isComplete: false });
  };

  return (
    <form onSubmit={handleSubmitTask}>
      <input
        id='todo-input'
        className='todo-input'
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        placeholder='Write your task here...'
      ></input>
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default TodoInput;
