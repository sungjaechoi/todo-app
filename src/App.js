import { useState, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos ] = useState([
    {
      id: 1,
      text: '내용1',
      checked: true,
    },
    {
      id: 2,
      text: '내용2',
      checked: false,
    },
    {
      id: 3,
      text: '내용3',
      checked: false,
    },
  ]);

  const nextId = useRef(4)

  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo))
    nextId.current += 1;
  }

  const onToggle = id => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }

  const onRemove = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;