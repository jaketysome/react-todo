import TodoInput from "./todo-input";
import TodoItem from "./todo-item";

export default function TodoList() {
  return (
    <div className='todo-list'>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <TodoInput />
    </div>
  );
}
