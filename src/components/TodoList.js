import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, reMove, onToggle }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          reMove={reMove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;