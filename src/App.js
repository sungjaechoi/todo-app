import { useRef, useReducer } from "react";
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

function todoReducer(todos, action) {
  switch (action.type){
    case 'INSERT' : 
      return todos.concat(action.todo);
    case 'REMOVE' :
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE' :
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

//createBulkTodos을 함수 형태인 "createBulkTodos()"로 넣어 주게되면
//reRendering될 떄마다 "createBulkTodos()"가 호출 된다.
// useState에 넣은 것과 같이 넣게되면 
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(4)

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      cheked: false,
    };
    dispatch({type: 'INSERT', todo});
    nextId.current += 1;
  };

  const onRemove = id => dispatch({ type: 'REMOVE', id });

  const onToggle = (id) => {
    dispatch({ type: 'TOGGLE', id });
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
