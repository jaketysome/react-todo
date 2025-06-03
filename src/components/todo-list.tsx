import { useState } from "react";
import type { Task, TodoListStatus } from "../types";
import TodoItem from "./todo-item";
import TodoInput from "./todo-input";

const initialState = [
  { text: "Do the washing up", isComplete: false },
  { text: "Mow the lawn", isComplete: false },
  { text: "Solve the impending climate crisis", isComplete: false },
  { text: "Prepare for the singularity", isComplete: false },
  {
    text: "Defeat Jordan Peterson in hand to hand combat",
    isComplete: false,
  },
  { text: "Buy groceries", isComplete: false },
];

export default function TodoList() {
  const [status, setStatus] = useState<TodoListStatus>("empty");
  const [tasks, setTasks] = useState<Task[]>(initialState);

  return (
    <div className='todo-list'>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} {...{ task, index, tasks, setTasks }} />
        ))}
      </ul>
      <TodoInput {...{ status, setStatus, tasks, setTasks }} />
    </div>
  );
}
