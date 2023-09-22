import { useState, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 데이터 생성
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    })
  }
  return array;
}

//createBulkTodos을 함수 형태인 "createBulkTodos()"로 넣어 주게되면
//reRendering될 떄마다 "createBulkTodos()"가 호출 된다.
// useState에 넣은 것과 같이 넣게되면 
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4)

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      cheked: false,
    };
    setTodos(todos.concat(todo));
    console.log(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = id => setTodos(todos.filter(todo => todo.id !== id))

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
