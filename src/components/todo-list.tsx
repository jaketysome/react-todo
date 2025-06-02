import { useState } from "react";
import type { Task } from "../types/task";
import TodoItem from "./todo-item";

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
  const [newTask, setNewTask] = useState<Task>({ text: "", isComplete: false });
  const [tasks, setTasks] = useState<Task[]>(initialState);

  const handleNewTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ ...newTask, text: "" });
  };

  return (
    <div className='todo-list'>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
      <div className='todo-input'>
        <input
          value={newTask.text}
          onChange={(e) => {
            setNewTask({ text: e.target.value, isComplete: false });
          }}
          placeholder='Write your task here...'
        />
        <button type='button' onClick={handleNewTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
