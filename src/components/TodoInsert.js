import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert, onToggle }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  const onClick = () => {
    onInsert(value);
    setValue('');
  };

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        onToggle={onToggle}
      />
      <button type="button" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
