import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;