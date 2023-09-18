import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem onToggle={onToggle} todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;