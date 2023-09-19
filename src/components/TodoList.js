import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({ todos, Remove, onToggle }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          Remove={Remove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;