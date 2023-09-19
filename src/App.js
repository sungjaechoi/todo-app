import {useState, useRef} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '할일 1', checked: true },
    { id: 2, text: '할일 2', checked: false },
    { id: 3, text: '할일 3', checked: false }
  ]);

  const nextId = useRef(4)

  const onInsert = value => {
    const todo ={
      id: nextId.current,
      text: value,
      checked: false
    }
    setTodos(todos.concat(todo))

    nextId.current += 1
  }

  const Remove = id => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const onToggle = id => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} Remove={Remove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;