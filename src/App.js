import {useState, useRef} from 'react'
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: false,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: true,
    }
  ]);

  const onToggle = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );

  const nextId = useRef(4);

  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo))
    nextId.current += 1;
  }

  const onRemove = id => {setTodos(todos.filter(todo => {
    console.log('인자 ID' , id);
    console.log('todo', todo);
    console.log('todo.id', todo.id);
    console.log(todo.id !== id);
    return todo.id !== id;
  }))}
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </TodoTemplate>
  );
};

export default App;