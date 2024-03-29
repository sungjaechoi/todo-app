import {useState} from 'react';
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    console.log("input Value ::", e.target.value);
  }

  const onSubmit = (e) => {
      onInsert(value);
      console.log(onInsert)
      setValue('');
      e.preventDefault();
    }

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;