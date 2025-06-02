import { useState } from "react";
import type { Task } from "../types/task";
import TodoItem from "./todo-item";

type TodoListStatus = "empty" | "typing" | "success";

const initialState = [
  { text: "Do the washing up", isComplete: false },
  { text: "Mow the lawn", isComplete: false },
  { text: "Solve the impending climate crisis", isComplete: false },
  { text: "Prepare for the singularity", isComplete: false },
  {
    text: "Defeat Jordan Peterson in hand to hand combat",
    isComplete: false,
  },
];

export default function TodoList() {
  const [status, setStatus] = useState<TodoListStatus>("empty");
  const [newTask, setNewTask] = useState<Task>({ text: "", isComplete: false });
  const [tasks, setTasks] = useState<Task[]>(initialState);

  const handleNewTask = () => {
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
    <div className='todo-list'>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} {...{ task, index, tasks, setTasks }} />
        ))}
      </ul>
      <div className='todo-input'>
        <input
          value={newTask.text}
          onChange={(e) => handleInputChange(e)}
          placeholder='Write your task here...'
        />
        <button
          type='button'
          disabled={status === "empty"}
          onClick={handleNewTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
