import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'

const TodoListItem = ({ todo, Remove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem">
      <span className={checked ? 'checkbox checked' : 'checkbox'} onClick={()=> onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </span>
      <span className="remove" onClick={() => Remove(id)}>
        <MdRemoveCircleOutline />
      </span>
    </li>
  );
};

export default TodoListItem;